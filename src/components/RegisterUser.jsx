import React, { useState } from 'react';

const RegisterUser = () => {
  const [authorName, setAuthorName] = useState('');
  const [email, setEmail] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [isAbove18, setIsAbove18] = useState(false);

  const handleAuthorNameChange = (event) => {
    setAuthorName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTwitterLinkChange = (event) => {
    setTwitterLink(event.target.value);
  };

  const handleAgeCheckboxChange = (event) => {
    setIsAbove18(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any additional validation or submission logic here

    // For example, you might want to check if authorName and email are not empty
    if (authorName.trim() === '' || email.trim() === '') {
      alert('Please fill in all mandatory fields.');
      return;
    }

    // If everything is valid, you can proceed with the form submission logic
    console.log('Author Name:', authorName);
    console.log('Email:', email);
    console.log('Twitter Link:', twitterLink);
    console.log('Above 18:', isAbove18);
  };

  return (
    <form
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '300px',
        margin: 'auto',
        marginTop: '50px',
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="authorName">Author Name *</label>
        <input
          type="text"
          id="authorName"
          value={authorName}
          onChange={handleAuthorNameChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>

      <div>
        <label htmlFor="twitterLink">Twitter Link (Optional)</label>
        <input
          type="text"
          id="twitterLink"
          value={twitterLink}
          onChange={handleTwitterLinkChange}
        />
      </div>

      <div>
        <input
          type="checkbox"
          id="ageCheckbox"
          checked={isAbove18}
          onChange={handleAgeCheckboxChange}
        />
        <label htmlFor="ageCheckbox">I am above 18 years of age</label>
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterUser;
