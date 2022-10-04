import React from 'react';

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          className={
            'badge' + 'badge-success'
            // (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type}
        </span>
      </h3>{' '}
      ContactItem
    </div>
  );
};

export default ContactItem;