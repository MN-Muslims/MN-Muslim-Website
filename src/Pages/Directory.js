import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/admin.css';
import '../styles/directory.css';
import { useNavigate } from 'react-router-dom';

function NewPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [businesses, setBusinesses] = useState([]);
  const [masjids, setMasjids] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [filteredMasjids, setFilteredMasjids] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const businessesResponse = await axios.get('https://mnmuslims-api.onrender.com/api/businesses');
      const masjidsResponse = await axios.get('https://mnmuslims-api.onrender.com/api/masjids');

      setBusinesses(businessesResponse.data);
      setFilteredBusinesses(businessesResponse.data);

      setMasjids(masjidsResponse.data);
      setFilteredMasjids(masjidsResponse.data);

      setIsLoading(false);
    } catch (error) {
      console.error('API error:', error);
    }
  };

  useEffect(() => {
    const filteredBusinesses = businesses.filter((business) => {
      const title = business.title.toLowerCase();
      return title.includes(searchTerm.toLowerCase());
    });
    setFilteredBusinesses(filteredBusinesses);
  }, [searchTerm, businesses]);

  useEffect(() => {
    const filteredMasjids = masjids.filter((masjid) => {
      const name = masjid.Name.toLowerCase();
      return name.includes(searchTerm.toLowerCase());
    });
    setFilteredMasjids(filteredMasjids);
  }, [searchTerm, masjids]);

  const handlePostClick = (business) => {
    navigate(`/detail?title=${encodeURIComponent(business.title)}&description=${encodeURIComponent(
      business.description
    )}&address=${encodeURIComponent(business.address)}&number=${encodeURIComponent(
      business.number
    )}&services=${encodeURIComponent(business.services)}&links=${encodeURIComponent(
      business.links
    )}&workingHours=${encodeURIComponent(business.workingHours)}&email=${encodeURIComponent(
      business.email
    )}&createdAt=${encodeURIComponent(business.createdAt)}`);
  };

  const handlePostClickMasjid = (masjid) => {
    navigate(`/detailmasjid?Name=${encodeURIComponent(masjid.Name)}&address=${encodeURIComponent(masjid.Address)}&jumuah=${encodeURIComponent(masjid['JumuahTimings/Language'])}&dailySalat=${encodeURIComponent(masjid['DailySalat(Yes/No)'])}&orgInfo=${encodeURIComponent(masjid.OrganizationInfo)}&notes=${encodeURIComponent(masjid.AdditionalNotes)}&contact=${encodeURIComponent(masjid['ContactInfo/Person'])}`);
  };

  return (
    <div className="directory-background">
      <h1>Directory</h1>
      <div className="links">
        <a href="/findMasjid">
          <p>All Masjids</p>
        </a>
      </div>
      <div className="links">
        <a href="/findBusiness">
          <p>All Businesses</p>
        </a>
      </div>
      <div className='search-field'>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>


      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Businesses</h2>
          <div className='join-button'>
        <button onClick={() => navigate("/form")}>Add Business</button>
      </div>

          <ul>
            <div className="home">
              <div className="page-container">
                {filteredBusinesses.map((business) => (
                  <div className="page-details" key={business._id}>
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
                ))}
              </div>
            </div>
          </ul>

          <h2>Masjids</h2>
          <ul>
          <div className="masjid">
              <div className="masjids">
                {filteredMasjids.map((masjid) => (
                  <div className="masjid-details" key={masjid._id}>
                    <a href="#" onClick={() => handlePostClickMasjid(masjid)}>
                      <h4>{masjid.Name}</h4>
                    </a>
                    <p>
                      <strong>Address: </strong>
                      {masjid.Address}
                    </p>
                    <p>
                      <strong>Jumuah Timings/Language: </strong>
                      {masjid['JumuahTimings/Language']}
                    </p>
                    <p>
                      <strong>Organization Info: </strong>
                      <div className="url-links">
                      <a href={masjid.OrganizationInfo}  target="_blank">{masjid.OrganizationInfo}</a>

                      </div>
                    </p>
                    <p>
                      <strong>Contact Info: </strong>
                      {masjid['ContactInfo/Person']}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ul>
        </>
      )}
    </div>
  );
}

export default NewPage;
