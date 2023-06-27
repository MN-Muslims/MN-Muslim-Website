import React from 'react'
import { useEffect } from 'react';
import { UseBusinessesContext } from '../hooks/UseBusinessesContext';
import { useNavigate } from 'react-router-dom';
import AdminAnnouncement from './AdminAnnouncement';
// components
import BusinessDetails from '../components/BusinessDetails'
import BusinessForm from '../components/BusinessForm.js';
import AdminNav from '../components/AdminNav';
import '../styles/admin.css';
import Nav from '../components/Nav';
function BusinessAdmin() {
    const {businesses, dispatch} = UseBusinessesContext()
    let navigate = useNavigate();

    useEffect(() => {
        const fetchBusinesses = async () => {
            const response = await fetch('https://mnmuslims-api.onrender.com/api/businesses/')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_BUSINESSES', payload: json})
            }
        }
        fetchBusinesses()
    }, [])

  return (
    <div>
        {/* <Nav/> */}
        <h2>Business Admin</h2>
        <AdminNav/>

        <div className='home'>
            <div className='workouts'>
                {businesses && businesses.map((business) => (
                    <BusinessDetails key={business._id} business={business}/>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default BusinessAdmin