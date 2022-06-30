import React, { useState } from 'react';
import axios from 'axios';
import AvatarImageCropper from 'react-avatar-image-cropper';
import { Button } from 'react-bootstrap';
import './ImageHome.Module.css';

function ImageHome() {
  // const setImage = (file) => {
  //   console.log(file);
  // };

  // const actions = [
  //   <Button variant="info" key={0}>Apply</Button>,
  //   <Button variant="dark" key={1}>Cancel</Button>,
  // ];
  const [file, setFile] = useState(null);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData();

    form.append('picture', file);

    try {
      const response = await axios.put(
        'https://second-hand-be.herokuapp.com/api/user/picture/:id/cloudinary',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      setUploadedFileURL(`http://res.cloudinary.com/${response.data.url}`);
    } catch (err) {
      console.log(err);
      console.log(err?.responses?.data);
    }
  }

  return (
    <>
      {uploadedFileURL && (
        <img src={uploadedFileURL} alt="" />
      )}

      {/* <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => { return setFile(e.target.files[0]); }} />
        <input type="submit" value="Upload" />
      </form> */}

      <form onSubmit={handleSubmit}>
        <AvatarImageCropper
          type="file"
          onChange={(e) => { return setFile(e.target.files[0]); }}
          className="avatar-image"
        />
        <input className="mt-4" type="submit" value="Upload" />
      </form>
    </>

  );
}
export default ImageHome;
