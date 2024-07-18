import React from 'react';
import './contactS.css';

const ContactS = () => {
  return (
    <div className='bodyContactS'>

      <form className='contactForm'>

        <h2>Contact Us</h2>

        <label>
          Name:
          <input type='text' name='name' />
        </label>

        <label>
          Email:
          <input type='email' name='email' />
        </label>

        <label>
          Message:
          <textarea name='message' />
        </label>

        <button type='submit'>Send</button>

      </form>
    </div>
  );
};

export default ContactS;
