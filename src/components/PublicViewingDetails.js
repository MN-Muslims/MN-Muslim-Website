import { useState, useEffect } from 'react';
import { UseBusinessesContext } from '../hooks/UseBusinessesContext';
import { useNavigate } from 'react-router-dom';


const PublicViewingDetails = ({ business }) => {

  
    const { dispatch } = UseBusinessesContext();
    const navigate = useNavigate();
    
    const handlePostClick = () => {
      navigate(`/detail?title=${encodeURIComponent(business.title)}&description=${encodeURIComponent(business.description)}&address=${encodeURIComponent(business.address)}&number=${encodeURIComponent(business.number)}&services=${encodeURIComponent(business.services)}&links=${encodeURIComponent(business.links)}&workingHours=${encodeURIComponent(business.workingHours)}&email=${encodeURIComponent(business.email)}&createdAt=${encodeURIComponent(business.createdAt)}`);
    };
  
    return (
      <div className="page-details">
  
  <a href="#" onClick={() => handlePostClick(business)}>
                  <h4>{business.title}</h4>
                </a>
        <p>
          <strong>description: </strong>
          {business.description}
        </p>
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


        <p>{business.createdAt}</p>
  
  
      </div>
    );
  };
  
  export default PublicViewingDetails;
  