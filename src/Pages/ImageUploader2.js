import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UseImageContext } from '../hooks/UseImageContext';
import { useNavigate } from 'react-router-dom';
import '../styles/imageuploader.css';

const ImageUploader2 = ({ image }) => {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const { dispatch } = UseImageContext();
  const [deletedImageId, setDeletedImageId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://mnmuslims-api.onrender.com/uploads2');
        setImages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchImages();
  }, [image, deletedImageId]);
  
  const handleClick = async (image) => {
    try {
      await axios.delete(`https://mnmuslims-api.onrender.com/uploads2/${image._id}`);
      dispatch({ type: 'DELETE_Image_Context', payload: image._id });
      setDeletedImageId(image._id);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('https://mnmuslims-api.onrender.com/uploads2', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Image uploaded successfully!');
      setFile(null);
      const imagesResponse = await axios.get('https://mnmuslims-api.onrender.com/uploads2');
      setImages(imagesResponse.data);
    } catch (error) {
      console.error(error);
      alert('Error uploading image.');
    }
  };

  return (
    <div>
      <h1>Image Uploader for description2</h1>
      <div style={{ width: 200, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {file ? (
          <img src={URL.createObjectURL(file)} alt="Uploaded" style={{ width: '100%', height: '100%' }} />
        ) : (
          <input type="file" accept="image/*" onChange={handleFileChange} />
        )}
      </div>
      {file && <button onClick={handleUpload}>Upload</button>}
      <h2>Uploaded Images for description2</h2>
      
      <div className="image-position" style={{ display: 'flex' }}>
        {images
          .filter((image) => image._id !== deletedImageId)
          .map((image) => (
            <div key={image._id} style={{ margin: 10 }}>
              <img src={image.imageUrl2} alt="Uploaded" style={{ width: 200, height: 200 }} />
              <div className='image-delete'>
                <button onClick={() => handleClick(image)}>delete</button>
            </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageUploader2;
