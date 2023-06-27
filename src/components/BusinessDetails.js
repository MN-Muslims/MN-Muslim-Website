import { useState, useEffect } from 'react';
import { UseBusinessesContext } from '../hooks/UseBusinessesContext';
import BusinessPage from '../Pages/findBusiness';
import { useNavigate } from 'react-router-dom';

const BusinessDetails = ({ business }) => {
  const { dispatch } = UseBusinessesContext();
  const navigate = useNavigate();

  const handleClick = async () => {
    const response = await fetch('https://mnmuslims-api.onrender.com/api/businesses/' + business._id, {
      method: 'DELETE'
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_BUSINESS', payload: json });
    }
  };

  
  const handlePostClick = () => {
    navigate(`/detail?title=${encodeURIComponent(business.title)}&description=${encodeURIComponent(business.description)}&address=${encodeURIComponent(business.address)}&number=${encodeURIComponent(business.number)}&services=${encodeURIComponent(business.services)}&links=${encodeURIComponent(business.links)}&workingHours=${encodeURIComponent(business.workingHours)}&email=${encodeURIComponent(business.email)}&createdAt=${encodeURIComponent(business.createdAt)}`);
  };

  return (
    <div className="workout-details">

<a href="#" onClick={() => handlePostClick(business)}>
                  <h4>{business.title}</h4>
                </a>
      <p>
        <strong>description: </strong>
        {business.description}
      </p>
      {/* <p>
        <strong>address: </strong>
        {business.address}
      </p> */}
      {/* <p>
        <strong>phone number: </strong>
        {business.number}
      </p> */}
      <p>
        <strong>services: </strong>
        {business.services}
      </p>
      <p>
        <strong>links: </strong>
        <a href={business.links} target="_blank">{business.links}</a>
      </p>
      <p>
        <strong>email: </strong>
        {business.email}
      </p>

      {/* <p>
        <strong>working hours: </strong>
        {business.workingHours}
      </p> */}
      <p>{business.createdAt}</p>

      <span onClick={handleClick}>delete</span>

      {/* <button onClick={handlePostClick}>Info</button> */}
      

    </div>
  );
};

export default BusinessDetails;
