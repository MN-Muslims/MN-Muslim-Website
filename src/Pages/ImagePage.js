import React from 'react'
import ImageUploader1 from './ImageUploader1'
import ImageUploader2 from './ImageUploader2'
import ImageUploader3 from './ImageUploader3'
import AdminNav from '../components/AdminNav'

function ImagePage() {
  return (
    <div>
        <h1>ImagePage</h1>
        <AdminNav/>
        <ImageUploader1/>
        <ImageUploader2/>
        <ImageUploader3/>
    </div>
  )
}

export default ImagePage