import { useState } from "react"
import { UseBusinessesContext } from '../hooks/UseBusinessesContext';
import '../styles/business.css';
import { useNavigate } from 'react-router-dom';
import BusinessDetails from "./BusinessDetails";

const BusinessForm = () => {
    const { dispatch } = UseBusinessesContext()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [services, setServices] = useState('')
    const [links, setLinks] = useState('')
    const [email, setEmail] = useState('')
    const [workingHours, setWorkingHours] = useState('')
    const [error, setError] = useState(null)

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const business = {title, description, address, number, services, links, email, workingHours}

        const response = await fetch('https://mnmuslims-api.onrender.com/api/businesses', {
            method: 'POST',
            body: JSON.stringify(business),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setTitle('')
            setDescription('')
            setAddress('')
            setNumber('')
            setServices('')
            setLinks('')
            setEmail('')
            setWorkingHours('')

            setError(null)
            console.log('new business added', json)
            dispatch({type:'CREATE_BUSINESS', payload: json})

            navigate("/findBusiness")
        }
    }

    return(
        <form className="create" action="/findBusiness" method="POST" onSubmit={handleSubmit}>
            <h3>Add a Business</h3>

            <label>Name</label>
            <input 
            onChange={(e) => 
            setTitle(e.target.value)}
            value={title}
            />

            <label>description</label>
            <input 
            onChange={(e) => 
            setDescription(e.target.value)}
            value={description}
            />


            <label>address</label>
            <input 
            onChange={(e) => 
            setAddress(e.target.value)}
            value={address}
            />

            <label>number</label>
            <input 
            onChange={(e) => 
            setNumber(e.target.value)}
            value={number}
            />

            <label>services</label>
            <input 
            onChange={(e) => 
            setServices(e.target.value)}
            value={services}
            />


            <label>links</label>
            <input 
            onChange={(e) => 
            setLinks(e.target.value)}
            value={links}
            />

            <label>email</label>
            <input 
            onChange={(e) => 
            setEmail(e.target.value)}
            value={email}
            />


            <label>working hours</label>
            <input 
            onChange={(e) => 
            setWorkingHours(e.target.value)}
            value={workingHours}
            />

            <button onSubmit={BusinessDetails}>Add Business</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default BusinessForm