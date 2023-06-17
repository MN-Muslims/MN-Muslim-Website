import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/home.css';

import { useNavigate } from 'react-router-dom';
import { UseCarouselContext } from '../hooks/UseCarouselContext';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Background from '../images/background.jpg';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="arrow next" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="arrow prev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};

const Home = () => {
  let navigate = useNavigate();
  const [carouselData, setCarouselData] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [imageData2, setImageData2] = useState([]);
  const [imageData3, setImageData3] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:4000/api/carousel/')
      .then((response) => response.json())
      .then((data) => {
        setCarouselData(data);
        setIsLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => console.error(error));


      fetch('http://localhost:4000/uploads/')
      .then((response) => response.json())
      .then((image) => {
        setImageData(image);
        setIsLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => console.error(error));

      fetch('http://localhost:4000/uploads2/')
      .then((response) => response.json())
      .then((image) => {
        setImageData2(image);
        setIsLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => console.error(error));

      fetch('http://localhost:4000/uploads3/')
      .then((response) => response.json())
      .then((image) => {
        setImageData3(image);
        setIsLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => console.error(error));


  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className='website'>
      {/* <Nav /> */}
      {/* <div className='title'>
        <h1>Home</h1>
      </div> */}
      
      <div className='sub-title'>
        <h2>Suhbah Collective Presents: MN Muslims</h2>
      </div>
      <div className='small-title'>
        <h3>Your digital source for Minnesota Ummah</h3>
      </div>

      {/* <h2>Announcements</h2> */}

      <div className="carousel-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Slider {...settings}>
            <div className='sentence'>

            {imageData.map((slide, index) => (
                <div key={index} className='sentence'>
            <img src={slide.imageUrl} alt="Uploaded" style={{ width: 200, height: 200 }} />
                  {/* {slide.image1 && <img src={slide.image1} />} */}
                </div>
                  ))}


              {carouselData.map((slide, index) => (
                <div key={index} className='sentence'>
                  <p>{slide.description1}</p>
                  {/* {slide.image1 && <img src={slide.image1} />} */}
                </div>

                
              ))}
            </div>
            <div className='sentence'>

            {imageData2.map((slide, index) => (
                <div key={index} className='sentence'>
            <img src={slide.imageUrl2} alt="Uploaded" style={{ width: 200, height: 200 }} />
                  {/* {slide.image1 && <img src={slide.image1} />} */}
                </div>
                  ))}


              {carouselData.map((slide, index) => (
                <div key={index} className='sentence'>
                  <p>{slide.description2}</p>
                </div>
              ))}
            </div>
            <div className='sentence'>

            {imageData3.map((slide, index) => (
                <div key={index} className='sentence'>
            <img src={slide.imageUrl3} alt="Uploaded" style={{ width: 200, height: 200 }} />
                  {/* {slide.image1 && <img src={slide.image1} />} */}
                </div>
                  ))}

              {carouselData.map((slide, index) => (
                <div key={index} className='sentence'>
                  <p>{slide.description3}</p>
                </div>
              ))}
            </div>
          </Slider>
        )}
      </div>

      
      <h3>About Us</h3>
      <p className='line'>Suhbah Collective’s goal is to promote the social, financial, and personal growth of its members and members of their community.</p>
      <div className='about-button'>
        <button onClick={() => navigate("/about")}>About</button>
      </div>
      <h3>Join Today</h3>
      <p className='line'>Want to be part of this effort to create an online hub for the community? Then join us now.</p>
      <div className='join-button'>
        <button onClick={() => navigate("/contact")}>Join</button>
      </div>
      <br />
    </div>
  );
};

export default Home;
