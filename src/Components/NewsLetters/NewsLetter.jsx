import React from 'react';
import "./NewsLetter.css";

const NewsLetter = () => {

  return (
    <div className='newletter'>

      <h1>
        Get Exclusive Offers on You Email
      </h1>
      <p>
        Subscribe to our newletter and stay updated
      </p>

      <div className="">
        <input type="email" 
         placeholder='Your Email id'
        />
        <button>
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default NewsLetter