import React, { useState } from 'react';
import axios from 'axios';
import AvatarImageCropper, { propTypes } from 'react-avatar-image-cropper';
import { Button } from 'react-bootstrap';
import './ImageHome.Module.css';

function ImageHome(props) {
  // const setImage = (file) => {
  //   console.log(file);
  // };

  // const actions = [
  //   <Button variant="info" key={0}>Apply</Button>,
  //   <Button variant="dark" key={1}>Cancel</Button>,
  // ];

  // const [uploadedFileURL, setUploadedFileURL] = useState(null);

  return (
    <>
      {/* {uploadedFileURL && (
        <img src={uploadedFileURL} alt="" />
      )} */}

      {/* <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => { return setFile(e.target.files[0]); }} />
        <input type="submit" value="Upload" />
      </form> */}

      <form>
        <AvatarImageCropper
          type="file"
          onChange={props.onChangeImage}
          className="avatar-image"
        />
        {/* <input className="mt-4" type="submit" value="Upload" /> */}
      </form>
    </>

  );
}
export default ImageHome;
