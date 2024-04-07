import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import backimg from "../Assets/backimg.png";
import img from "../Assets/photo.png";

const Upload = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file)); // Save uploaded image URL
  };

  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${backimg})` }}
    >
      <div
        onClick={handleImageClick}
        className="mt-40 w-50 flex flex-col items-center space-between"
      >
        {image ? (
          <img
            src={image}
            style={{ height: "60%", width: "50%" }}
            alt="Image"
          />
        ) : (
          <img src={img} style={{ height: "40%", width: "25%" }} alt="Img" />
        )}
        <input type="file" onChange={handleImageChange} ref={inputRef} />
      </div>
      <div className="flex flex-col items-center mt-[50px]">
        <button
          onClick={() => navigate(`/mask?image=${encodeURIComponent(image)}`)}
          className=' items-center button type="button" class="text-white bg-gradient-to-r from-teal-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full text-sm px-5 py-2.5 items-center me-2 mb-2"'
        >
          Get Mask
        </button>
      </div>
    </div>
  );
};

export default Upload;
