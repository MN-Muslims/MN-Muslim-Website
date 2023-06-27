import React from 'react';
import Nav from '../components/Nav.js';
import { useLocation } from 'react-router-dom';
import '../styles/detail.css';

function Detail() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const title = params.get('title');
  const description = params.get('description');
  const address = params.get('address');
  const number = params.get('number');
  const email = params.get('email');
  const services = params.get('services');
  const links = params.get('links');
  const workingHours = params.get('workingHours');
  const createdAt = params.get('createdAt');

  return (
    <div className='company-information'>
      {/* <Nav /> */}
      {/* <h1>More Information</h1> */}

      <h2>
        {/* <strong>Title: </strong> */}
        {title}
      </h2>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
      <p>
        <strong>Address: </strong>
        {address}
      </p>
      <p>
        <strong>Phone number: </strong>
        {number}
      </p>
      <p>
        <strong>Services: </strong>
        {services}
      </p>
      <p>
        <strong>Links: </strong>
        <a href={links} target="_blank">{links}</a>
        {/* {links} */}
      </p>
      <p>
        <strong>Email: </strong>
        {email}
      </p>
      <p>
        <strong>Working Hours: </strong>
        {workingHours}
      </p>



      {/* <p>
        <strong>Email: </strong>
        {email}
      </p> */}
      {/* Render other post details */}
    </div>
  );
}

export default Detail;
