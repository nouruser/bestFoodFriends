import React from 'react';

const Announcement = ({ announcement }) => {
  return (
    <div className='announcement'>
      <h2>{announcement.title}</h2>
      <p>{announcement.content}</p>
      <p>Posted by: {announcement.author}</p>
    </div>
  );
};

export default Announcement;
