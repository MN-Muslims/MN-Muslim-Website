import { createContext, useReducer } from 'react'

export const ImageContext = createContext()

export const imageReducer = (state, action) => {
    switch (action.type) {

        case 'DELETE_Image_Context':
            return {
                image: state.image.filter((b) => b._id !== action.payload._id)
            }

        
        default:
            return state
    }
}

export const ImageContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(imageReducer, {
        image: []
    })


    return(
        <ImageContext.Provider value={{...state, dispatch}}>
            { children }
        </ImageContext.Provider>
    )
}