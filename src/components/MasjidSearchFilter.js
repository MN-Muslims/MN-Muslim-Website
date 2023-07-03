import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/admin.css';

const MasjidSearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [masjids, setMasjids] = useState([]);
  const [filteredMasjids, setFilteredMasjids] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://mnmuslims-api.onrender.com/api/masjids/')
      .then(response => response.json())
      .then(data => {
        setMasjids(data);
      })
      .catch(error => {
        console.error('API error:', error);
      });
  };
  const handlePostClick = (masjid) => {
    navigate(`/detailmasjid?Name=${encodeURIComponent(masjid.Name)}&address=${encodeURIComponent(masjid.Address)}`);
  };


  useEffect(() => {
    const filtered = masjids.filter(business => {
      const Name = business.Name.toLowerCase();
      return Name.includes(searchTerm.toLowerCase());
    });
    setFilteredMasjids(filtered);
  }, [searchTerm, masjids]);

  
  return (
    <div>
      <input
        type="text"
        placeholder="Search Masjid"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {searchTerm && (
        <ul>
            <div className='home'>
                <div className='page-container'>
                    {filteredMasjids.map(masjid => (
                    <div className='page-details' key={masjid._id}>
          <h4>{masjid.Name}</h4>
          <p>
            <strong>Address: </strong>
            {masjid.Address}
          </p>
        <p>
            <strong>Jumuah Timings/Language: </strong>
            {masjid['JumuahTimings/Language']}
          </p>
          <p>
            <strong>DailySalat(Yes/No): </strong>
            {masjid['DailySalat(Yes/No)']}
          </p>
          <p>
            <strong>Organization Info: </strong>
            {masjid.OrganizationInfo}
          </p>
          <p>
            <strong>Additional Notes: </strong>
            {masjid.AdditionalNotes}
          </p>
          <p>
            <strong>Contact Info: </strong>
            {masjid['ContactInfo/Person']}
          </p>


        <button onClick={() => handlePostClick(masjid)}>detail</button>


                    </div>
                    ))}

                </div>
            </div>
        </ul>
      )}
    </div>
  );
};

export default MasjidSearchFilter;
