import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/admin.css';

const SearchBusiness = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://mnmuslims-api.onrender.com/api/businesses/')
      .then(response => response.json())
      .then(data => {
        setBusinesses(data);
      })
      .catch(error => {
        console.error('API error:', error);
      });
  };
  const handlePostClick = (business) => {
    navigate(`/detail?title=${encodeURIComponent(business.title)}&description=${encodeURIComponent(business.description)}&address=${encodeURIComponent(business.address)}&number=${encodeURIComponent(business.number)}&services=${encodeURIComponent(business.services)}&links=${encodeURIComponent(business.links)}&workingHours=${encodeURIComponent(business.workingHours)}&createdAt=${encodeURIComponent(business.createdAt)}`);
  };


  useEffect(() => {
    const filtered = businesses.filter(business => {
      const title = business.title.toLowerCase();
      return title.includes(searchTerm.toLowerCase());
    });
    setFilteredBusinesses(filtered);
  }, [searchTerm, businesses]);

  
  return (
    <div>
      <input
        type="text"
        placeholder="Search Business"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {searchTerm && (
        <ul>
            <div className='home'>
                <div className='page-container'>
                    {filteredBusinesses.map(business => (
                    <div className='page-details' key={business._id}>
                                <h4>{business.title}</h4>
        <p>
          <strong>description: </strong>
          {business.description}
        </p>
        <p>
          <strong>address: </strong>
          {business.address}
        </p>
        <p>
          <strong>phone number: </strong>
          {business.number}
        </p>
        <p>
          <strong>services: </strong>
          {business.services}
        </p>
        <p>
          <strong>links: </strong>
          <a href={business.links}>{business.links}</a>
        </p>
  
        <p>
          <strong>working hours: </strong>
          {business.workingHours}
        </p>
        <p>{business.createdAt}</p>

        <button onClick={() => handlePostClick(business)}>detail</button>


                    </div>
                    ))}

                </div>
            </div>
        </ul>
      )}
    </div>
  );
};

export default SearchBusiness;
