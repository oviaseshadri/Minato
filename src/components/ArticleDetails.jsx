import React from 'react';

const ArticleDetails = ({ article, onClose }) => {
  return (
    <div style={detailsContainerStyle}>
      <div style={detailsStyle}>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <p>Author: {article.author}</p>
        {/* <p>Keywords: {article.keywords}</p> */}

        {/* Buttons */}
        <div style={buttonContainerStyle}>
          <button style={buttonStyle}>Donate to Author</button>
          <button style={buttonStyle}>Claim Carbon Credits</button>
        </div>

        {/* Close button */}
        <img
          src="../../images/close.png"
          alt="Close"
          style={closeButtonStyle}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

const detailsContainerStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '2',
};

const detailsStyle = {
  padding: '20px',
  backgroundColor: 'rgba(173, 216, 230, 1.0)', // Light blue opaque background
  borderRadius: '10px',
  width: '300px', // Smaller width
  position: 'relative',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '20px 0', // Adjust margin as needed
};

const buttonStyle = {
  margin: '0 10px', // Adjust margin as needed
  padding: '10px 20px',
  backgroundColor: '#4CAF50', // Green background color
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
  width: '25px',
};

export default ArticleDetails;
