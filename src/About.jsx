import React from 'react';

export default function About() {
  return (
    <div className="container-fluid mt-5 py-5  text-white content">
      <h2 className="text-uppercase text-center fw-bold mt-5 pt-5">about component</h2>
      <div className="shape mt-2 d-flex align-items-center justify-content-center">
  <div className="line " /> 
  <div className="star">        
    <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-star-fill text-white "
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg></div> 
  <div className="line" /> 
</div>
<div className="txt m-auto d-md-flex py-5 col-md-10 align-items-center justify-content-between">
  <p className="py-3 px-5">
  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
  </p>
  <p className="py-3 px-5">
  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
  </p>

</div>
    </div>
  );
}
