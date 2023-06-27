import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseCarouselContext } from '../hooks/UseCarouselContext';
import CarouselDetails from '../components/CarouselDetails';
import CarouselForm from '../components/CarouselForm';
import AdminNav from '../components/AdminNav';
import '../styles/admin.css';
import Nav from '../components/Nav';

const AdminAnnouncements = () => {
  const { carousel, dispatch } = UseCarouselContext();
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchCarouselData = async () => {
      const response = await fetch('https://mnmuslims-api.onrender.com/api/carousel/');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_CAROUSEL', payload: json });
      }

      setIsLoading(false); // Set loading state to false after data is fetched
    };

    fetchCarouselData();
  }, []);

  return (
    <div>
      <h2>Announcement</h2>
      <AdminNav/>

      <div className="workout-details">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className='home'>
              <div className='workouts'>
                {carousel &&
                  carousel.map((carousel) => (
                    <CarouselDetails key={carousel._id} carousel={carousel} />
                  ))}
              </div>
            </div>
            <CarouselForm />
          </>
        )}
      </div>
    </div>
  );
};

export default AdminAnnouncements;
