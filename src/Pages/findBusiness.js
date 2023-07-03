import React, { useEffect, useState } from 'react';
import { UseBusinessesContext } from '../hooks/UseBusinessesContext';
import { useNavigate } from 'react-router-dom';
import '../styles/findbusiness.css';
import PublicViewingDetails from '../components/PublicViewingDetails';

function FindBusiness() {
  const { businesses, dispatch } = UseBusinessesContext();
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusinesses = async () => {
      const response = await fetch('https://mnmuslims-api.onrender.com/api/businesses/');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_BUSINESSES', payload: json });
      }
      setLoading(false); 
    };

    fetchBusinesses();
  }, []);


  return (
    <div>
      <h1>Find A Business</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='home'>
          <div className='page-container'>
            {businesses &&
              businesses.map((business) => (
                <PublicViewingDetails key={business._id} business={business} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FindBusiness;
