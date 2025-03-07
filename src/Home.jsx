import React from "react";
import img from "../imgs/avataaars.svg";
export default function Home() {
  return (
    <div className="content container-fluid min-vh-100 pt-5">
      <div className="row py-5  justify-content-center align-items-center d-flex text-center">
        <img src={img} className="col-md-6 col-lg-3 col-sm-2" alt="photo" />
        <h1 className="text-center text-uppercase text-white pt-5 fw-bold">
          start Framework
        </h1>
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
<p className="text-white mt-2">Graphic Artist - Web Designer - Illustrator</p>


      </div>
    </div>
  );
}
