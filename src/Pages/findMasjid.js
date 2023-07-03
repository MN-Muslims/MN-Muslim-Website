import { useEffect, useState } from 'react'
import PublicViewingMajids from '../components/PublicViewingMajids.js';

function findMasjid() {

  return (
    <div className='website'>
      <h1>Find A Masjid</h1>

      <div className='home'>
            <div className='page-container'>
      <PublicViewingMajids/>
      </div>
      </div>
    </div>
  )
}

export default findMasjid