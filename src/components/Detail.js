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

  return (
    <div className='company-information'>

      <h2>
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
      </p>
      <p>
        <strong>Email: </strong>
        {email}
      </p>
      <p>
        <strong>Working Hours: </strong>
        {workingHours}
      </p>

    </div>
  );
}

export default Detail;
