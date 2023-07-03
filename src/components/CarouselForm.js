import { useState } from "react"
import { UseCarouselContext } from '../hooks/UseCarouselContext';
import '../styles/business.css';

import { useNavigate } from 'react-router-dom';
import CarouselDetails from "./CarouselDetails";


const CarouselForm = () => {
    const { dispatch } = UseCarouselContext()

    const [description1, setDescription1] = useState('')
    const [description2, setDescription2] = useState('')
    const [description3, setDescription3] = useState('')


    const [error, setError] = useState(null)

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const carousel = {description1, description2, description3}

        const response = await fetch('https://mnmuslims-api.onrender.com/api/carousel/', {
            method: 'POST',
            body: JSON.stringify(carousel),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setDescription1('')
            setDescription2('')
            setDescription3('')

            setError(null)
            console.log('new annoucement added', json)
            dispatch({type:'CREATE_CAROUSEL_DATA', payload: json})
        }
    }


  return (
    <form className="create" action="/findBusiness" method="POST" onSubmit={handleSubmit}>
    <h3>Add a Announcement</h3>

    <label>description1</label>
    <input 
    onChange={(e) => 
    setDescription1(e.target.value)}
    value={description1}
    />

    <label>description2</label>
    <input 
    onChange={(e) => 
    setDescription2(e.target.value)}
    value={description2}
    />


    <label>description3</label>
    <input 
    onChange={(e) => 
    setDescription3(e.target.value)}
    value={description3}
    />

    <button onSubmit={CarouselDetails}>Add Announcement</button>
    {error && <div className="error">{error}</div>}


</form>
)
}

export default CarouselForm