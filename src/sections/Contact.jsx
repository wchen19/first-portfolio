import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactCard from '../components/ContactCard';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1do7vdp',
        'template_ntf0819',
        form.current,
        '5D_wzZPW0FzTdCgOI'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className='contact-container'>
      <span>Contact Me</span>
      <div className='contact-form'>
        <div className='left-contact'>
          <ContactCard
            icon={<EmailIcon />}
            type='Gmail'
            name='wilbertchen2001@gmail.com'
            link='mailto:wilbertchen2001@gmail.com'
            text='Send an email'
          />
          <ContactCard
            icon={<WhatsAppIcon />}
            type='Whatsapp'
            name='+6289699599999'
            link='https://api.whatsapp.com/send?phone=089699599999'
            text='Send a message'
          />
          <ContactCard
            icon={<LinkedInIcon />}
            type='LinkedIn'
            name='Wilbert Chen'
            link='https://www.linkedin.com/in/wilbert-chen-ab456320a/'
            text='Send a message'
          />
        </div>
        <div className='right-contact'>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type='text'
              name='user_name'
              className='user'
              placeholder='Name'
            />
            <input
              type='text'
              name='user_email'
              className='user'
              placeholder='Email'
            />
            <textarea name='message' className='user' placeholder='Message' />
            <input type='submit' value='Send' />
          </form>
          <h3>
            {done &&
              'Thank you for the message! I will reply your message ASAP.'}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
