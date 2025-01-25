import React, { useState } from "react";

// Dynamically import images from the assets folder
const images = Object.values(
  import.meta.glob("./assets/*.{png,jpg,jpeg,PNG,JPG,JPEG}", {
    as: "url",
    eager: true,
  })
);

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseOverlay = (event) => {
    if (event.target === event.currentTarget) {
      setSelectedImage(null);
    }
  };

  // Create a repeated pattern of images
  const repeatedImages = Array.from({ length: 10 }) // Adjust the length as needed
    .flatMap(() => images); // Repeat the images array

  return (
    <div className="container-fluid mt-5 pt-5 port">
      <h2 className="text-uppercase fw-bold text-center pt-5">
        Portfolio Component
      </h2>
      <div className="shape mt-2 d-flex align-items-center justify-content-center">
        <div className="line" />
        <div className="star">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </div>
        <div className="line" />
      </div>
      <div className="container py-3">
        <div className="row g-5">
          {repeatedImages.map((img, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card">
                <img
                  src={img}
                  alt={`Portfolio Image ${index + 1}`}
                  className="rounded position-relative"
                  onClick={() => handleImageClick(img)}
                />
                <div
                  className="card-body rounded position-absolute text-center top-0 end-0 start-0 bottom-0 m-auto"
                  onClick={() => handleImageClick(img)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="currentColor"
                    className="bi bi-plus-lg text-white fw-bold text-center"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(118, 167, 237, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleCloseOverlay}
        >
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: "70%", maxHeight: "75%" }}
          />
        </div>
      )}
    </div>
  );
}
