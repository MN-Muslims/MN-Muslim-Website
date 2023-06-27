import { ImageContext } from "../context/ImageContext";
import { useContext } from "react";

export const UseImageContext = () => {
    const context = useContext(ImageContext)

    if (!context) {
        throw Error('UseImageContext must be used inside a UseImageContextProvider')
    }

    return context
}