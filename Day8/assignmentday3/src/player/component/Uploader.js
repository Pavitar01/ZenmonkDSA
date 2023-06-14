import React, { useState } from 'react';

const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [arr,setarr]=useState([])

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
     
  
    setarr([...arr,{
        file:selectedFile}])
    }
    console.log(arr)
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Uploader;