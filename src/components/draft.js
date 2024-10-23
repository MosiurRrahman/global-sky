"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
const MultiInputForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    visa_id: 3,
    visa_offer_id:2,
    name: '',
    mobile: '',
    visa_type: '',
    departure_date: '',
    destination_country: '',
    passport:'',
    passport_back:'',
    nid_image:'',
    nid_image_back:'',
  });
  // State to hold the selected files
  const [galleryImages, setGalleryImages] = useState([]);
  // Handle form inputs
  const handleChange = (e) => {
      //let value = (e.target.name == "passport" || e.target.name == "gallery_images" ? (e.target.name == "gallery_images" ? e.target.files : e.target.files[0]) : e.target.value);
      let inputValue = null;
      if(e.target.name == "passport" || e.target.name == "passport_back" || e.target.name == "nid_image"  || e.target.name == "nid_image_back" ){
        inputValue = e.target.files[0];
      }else{
        inputValue = e.target.value
      }
      setFormData({
        ...formData,
        [e.target.name]: inputValue,
      });
  }
  //step 2 Handle file input for multiple images
  const handleGalleryImage = (e) => {
    setFormData({
      ...formData,
      "gallery_images": e.target.files
    });
    //setGalleryImages(e.target.files);
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare the form data for the request
    // const data = new FormData();
    // data.append('name', formData.name);
    // data.append('mobile', formData.mobile);
    // // Append each image to the FormData
    // for (let i = 0; i < images.length; i++) {
    //   data.append('images[]', images[i]);
    // }
    try {
      // Make an API request to the Laravel backend
      const response = await axios.post('http://localhost:8000/api/visa/booking', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
      </div>
      <div>
        <label>departure_date
        :</label>
        <input type="date" name="departure_date" value={formData.departure_date} onChange={(date) => handleChange(date)} />
      </div>
      <div>
        <label>visa_type:</label>
        <select name="visa_type" onChange={handleChange}>
          <option value="sticker">Sticker</option>
          <option value="E-visa">E-visa</option>
        </select>
      </div>
      <div>
        <label>destination_country:</label>
        <input type="text" name="destination_country" value={formData.destination_country} onChange={handleChange} />
      </div>
      <div>
        <label>Upload Images:</label>
        <input type="file" name="passport" onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default MultiInputForm;