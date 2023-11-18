import React from 'react';
import authorsData from '../sampleData/authors.json';

const AuthorPanel = () => {
  return (
    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
      {authorsData.map((author, index) => (
        <div key={index} style={authorStyle}>
          <div style={{ width: '100px', height: '100px', overflow: 'hidden', borderRadius: '50%', margin: '0 auto' }}>
            <img
              src={author.profilePicture}
              alt={`${author.firstName} ${author.lastName}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <p style={{ fontWeight: 'bold', marginTop: '3px', textAlign: 'center', marginBottom: '0' }}>{author.firstName}</p>
          <p style={{ marginTop: '0', textAlign: 'center' }}>{author.lastName}</p>
        </div>
      ))}
    </div>
  );
};

const authorStyle = {
  display: 'inline-block',
  margin: '10px',
  textAlign: 'center',
  width: '120px', // Adjust the width as needed
};

export default AuthorPanel;
