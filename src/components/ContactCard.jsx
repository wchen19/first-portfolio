import React from 'react';
import '../styles/ContactCard.css';

const ContactCard = ({ icon, type, name, link, text }) => {
  return (
    <div className='contact-card'>
      {icon}
      <h4>{type}</h4>
      <h5>{name}</h5>
      <a href={link} target='_blank' rel='noreferrer'>
        {text}
      </a>
    </div>
  );
};

export default ContactCard;
