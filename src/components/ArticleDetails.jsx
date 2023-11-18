import React from 'react';

const ArticleDetails = ({ article, onClose }) => {
  return (
    <div style={detailsContainerStyle}>
      <div style={detailsStyle}>
        <img
          src="../../images/close.png"
          alt="Close"
          style={closeButtonStyle}
          onClick={onClose}
        />
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <p>Author: {article.author}</p>
        <p>Keywords: {article.keywords}</p>
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

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
  width: '25px', // Set width to 60px
};

export default ArticleDetails;
