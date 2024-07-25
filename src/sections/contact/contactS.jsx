import { useForm } from 'react-hook-form';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactS.css';

const ContactS = () => {

  const form = useRef();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (formData) => {
    emailjs
      .sendForm('service_969uy9e', 'template_0109oay', form.current, 'IF5STj-_nNhzmf1MB')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (

    <form className='bodyContactS' ref={form} onSubmit={handleSubmit(sendEmail)}>

      <h3 className='formHeader'>Talk with me BRO 🐱‍👤</h3>

      <div className='formName'>

        <label className='formElement'>Nombre</label>
        <input className='formElement' type="text" placeholder='Nombre'{...register('user_name', { required: true })} />
        {errors.user_name && <span>This field is required </span>}

      </div>

      <div className='formEmail'>

        <label className='formElement'>Email</label>
        <input className='formElement' type="email" placeholder='Email' {...register('user_email', {
          required: true, pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Invalid email address'
          }
        })} />

        {errors.user_email && <span>{errors.user_email.message}</span>}

      </div>

      <div className='formTextArea'>
        <label className='formElement'>Tu mensaje</label>
        <textarea placeholder='Dejame tu mensaje aqui' {...register('message', { required: true })} />
        {errors.message && <span>This field is required</span>}
      </div>

      <input className='formButton' type="submit" value="Send" />
    </form>
  );
}

export default ContactS;

// Cambiar "<span>This field is required</span>" de los campos por otros mas aestetick