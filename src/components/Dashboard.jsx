import React from 'react';
import AuthorPanel from './AuthorPanel'; 
import TopicPanel from './TopicPanel';
import ArticlePanel from './ArticlePanel';


const Dashboard = () => {
  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '800px',
        margin: 'auto',
        marginTop: '50px',
        textAlign: 'center',
      }}
    >
      <h2>Popular Authors</h2>
      <AuthorPanel />

      <h2>Topics</h2>
      <TopicPanel />

      <h2>Recent Articles</h2>
      <ArticlePanel />
    </div>
  );
};

export default Dashboard;
