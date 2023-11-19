import React, { useState } from 'react';
import { connect } from "starknetkit";
import { post_content } from '../sampleinteractionscript';




const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');
  const [keywords, setKeywords] = useState('');


  
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleArticleChange = (event) => {
    setArticle(event.target.value);
  };

  const handleKeywordsChange = (event) => {
    setKeywords(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event,"event")

    // Perform any additional validation or submission logic here

    // For example, you might want to check if title and article are not empty
    if (title.trim() === '' || article.trim() === '') {
      alert('Please fill in all mandatory fields.');
      return;
    }

    // If everything is valid, you can proceed with the form submission logic
    console.log('Title:', title);
    console.log('Article:', article);
    console.log('Keywords:', keywords);

    const connection = await connect({ modalMode: "neverAsk" });

    await post_content(title,article,connection)


  };

  return (
    <form
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '400px',
        margin: 'auto',
        marginTop: '50px',
        textAlign: 'center',
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter the title"
          style={{
            width: '100%',
            padding: '8px',
            margin: '8px 0',
            borderRadius: '5px',
            boxSizing: 'border-box',
            fontFamily: 'Courier New, monospace', // Type-writing font
          }}
          required
        />
      </div>

      <div>
        <label htmlFor="article">Article *</label>
        <textarea
          id="article"
          value={article}
          onChange={handleArticleChange}
          placeholder="Write your article here"
          style={{
            width: '100%',
            padding: '8px',
            margin: '8px 0',
            borderRadius: '5px',
            boxSizing: 'border-box',
            fontFamily: 'Courier New, monospace', // Type-writing font
            height: '150px', // Increased height
          }}
          required
        />
      </div>

      <div>
        <label htmlFor="keywords">Keywords (Optional)</label>
        <input
          type="text"
          id="keywords"
          value={keywords}
          onChange={handleKeywordsChange}
          placeholder="Enter keywords (comma-separated)"
          style={{
            width: '100%',
            padding: '8px',
            margin: '8px 0',
            borderRadius: '5px',
            boxSizing: 'border-box',
            fontFamily: 'Courier New, monospace', // Type-writing font
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Publish Article
      </button>
    </form>
  );
};

export default ArticleForm;
