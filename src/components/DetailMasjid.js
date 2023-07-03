import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/detailmasjid.css';

const DetailMasjid = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get('Name');
  const address = queryParams.get('address');
  const jumuahTimings = queryParams.get('jumuah');
  const dailySalat = queryParams.get('dailySalat');
  const orgInfo = queryParams.get('orgInfo');
  const notes = queryParams.get('notes');
  const contact = queryParams.get('contact');

  return (
    <div className='all-masjid-data'>
      <h2>{name}</h2>
      <p>
        <strong>Address: </strong>
        {address}
      </p>
      <p>
        <strong>Jumuah Timings/Language: </strong>
        {jumuahTimings}
      </p>
      <p>
        <strong>DailySalat(Yes/No): </strong>
        {dailySalat}
      </p>
      <p>
        <strong>Organization Info: </strong>
        <a href={orgInfo} target="_blank">{orgInfo}</a>
      </p>
      <p>
        <strong>Additional Notes: </strong>
        {notes}
      </p>
      <p>
        <strong>Contact Info: </strong>
        {contact}
      </p>
    </div>
  );
};

export default DetailMasjid;
