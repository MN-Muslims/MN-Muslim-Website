import { useState, useEffect } from 'react';
import { UseCarouselContext } from '../hooks/UseCarouselContext';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const CarouselDetails = ({ carousel }) => {
  const { dispatch } = UseCarouselContext();
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [updatedDescription1, setUpdatedDescription1] = useState('');
  const [updatedDescription2, setUpdatedDescription2] = useState('');
  const [updatedDescription3, setUpdatedDescription3] = useState('');
  const [updatedImage1, setUpdatedImage1] = useState('');

  useEffect(() => {
    setUpdatedDescription1(carousel.description1);
    setUpdatedDescription2(carousel.description2);
    setUpdatedDescription3(carousel.description3);
  }, [carousel]);

  const handleUpdate = async () => {
    const response = await fetch('https://mnmuslims-api.onrender.com/api/carousel/' + carousel._id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description1: updatedDescription1,
        description2: updatedDescription2,
        description3: updatedDescription3,
      }),
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'UPDATE_CAROUSEL_DATA', payload: json });
    }
    navigate('/')
  };

  const handleClick = async () => {
    const response = await fetch('https://mnmuslims-api.onrender.com/api/carousel/' + carousel._id, {
      method: 'DELETE'
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_CAROUSEL_DATA', payload: json });
    }
  };

  

  return (
    <div className="workout-details">

      <p>
        <strong>description1: </strong>
        {carousel.description1}
      </p>

      <p>
        <strong>description2: </strong>
        {carousel.description2}
      </p>
      <p>
        <strong>description3: </strong>
        {carousel.description3}
      </p>

      <input
        type="text"
        value={updatedDescription1}
        onChange={(e) => setUpdatedDescription1(e.target.value)}
      />
      
      <input
        type="text"
        value={updatedDescription2}
        onChange={(e) => setUpdatedDescription2(e.target.value)}
      />
      <input
        type="text"
        value={updatedDescription3}
        onChange={(e) => setUpdatedDescription3(e.target.value)}
      />
      
      <button onClick={handleUpdate}>Update</button>

      <span onClick={handleClick}>delete</span>

      
      {/* <button onClick={POST}>post</button> */}

    </div>
  );
};

export default CarouselDetails;
