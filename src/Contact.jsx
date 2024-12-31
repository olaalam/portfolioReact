import React, { useState } from 'react';

export default function Contact() {
  const [showLabels, setShowLabels] = useState({
    name: false,
    age: false,
    email: false,
    password: false,
  });

  const handleInputFocus = (field) => {
    setShowLabels((prev) => ({ ...prev, [field]: true }));
  };

  const handleInputBlur = (field, value) => {
    if (!value) {
      setShowLabels((prev) => ({ ...prev, [field]: false }));
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Form submitted!'); // Add your form submission logic here
  };


  return (
    <div className="contact container mt-5 pt-3">
      <div className="row">
        <h2 className="text-uppercase fw-bold text-center pt-5">Contact Section</h2>
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
        <form  onSubmit={handleSubmit} className="d-flex flex-column py-5  align-items-lg-center justify-content-lg-center">
          <div className="form-group mb-3 col-lg-8 col-sm-12 ">
            {showLabels.name && <label className="label-above" htmlFor="name">userName:</label>}
            <input
            className="col-lg-12 col-sm-12 border-0 border-bottom p-3"
              type="text"
              id="name"
              name="name"
              placeholder="userName"
              onFocus={() => handleInputFocus('name')}
              onBlur={(e) => handleInputBlur('name', e.target.value)}
            />
          </div>
          <div className="form-group mb-3 col-lg-8 col-sm-12 ">
            {showLabels.age && <label className="label-above" htmlFor="age">userAge:</label>}
            <input
                        className="col-lg-12 border-0 border-bottom p-3  col-sm-12 "
              type="number"
              id="age"
              name="age"
              placeholder="userAge"
              onFocus={() => handleInputFocus('age')}
              onBlur={(e) => handleInputBlur('age', e.target.value)}
            />
          </div>
          <div className="form-group mb-3 col-lg-8 col-sm-12">
            {showLabels.email && <label className="label-above" htmlFor="email">userEmail:</label>}
            <input
                        className="col-lg-12 border-0 border-bottom p-3  col-sm-12"
              type="email"
              id="email"
              name="email"
              placeholder="userEmail"
              onFocus={() => handleInputFocus('email')}
              onBlur={(e) => handleInputBlur('email', e.target.value)}
            />
          </div>
          <div className="form-group mb-3 col-lg-8 col-sm-12">
            {showLabels.password && <label className="label-above" htmlFor="password">userPassword:</label>}
            <input
                        className="col-lg-12 border-0 col-sm-12 border-bottom p-3"
              type="password"
              id="password"
              name="password"
              placeholder="userPassword"
              onFocus={() => handleInputFocus('password')}
              onBlur={(e) => handleInputBlur('password', e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}