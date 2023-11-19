import React, { useState, useEffect} from 'react';
import articlesData from '../sampleData/articles.json';
import ArticleDetails from './ArticleDetails';
import { get_content } from '../sampleinteractionscript';

const ArticlePanel = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseDetails = () => {
    setSelectedArticle(null);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      const connection = await connect({ modalMode: "neverAsk" });
      let articlesData = await get_content(connection)

    };
    fetchArticles();
  }, []);

  return (
    <div>
      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {articlesData.map((article, index) => (
          <div key={index} style={articleStyle} onClick={() => handleArticleClick(article)}>
            <h4 style={{ fontWeight: 'bold', textAlign: 'center', margin: '0' }}>{article.title}</h4>
            <p style={{ opacity: 0.8, margin: '5px 0', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {article.content}
            </p>
          </div>
        ))}
      </div>

      {selectedArticle && (
        <ArticleDetails article={selectedArticle} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

const articleStyle = {
  display: 'inline-block',
  margin: '10px',
  padding: '20px',
  backgroundColor: 'rgba(173, 216, 230, 0.5)', // Pale blue translucent background
  borderRadius: '10px',
  width: '300px', // Fixed width
  cursor: 'pointer', // Make the article clickable
};

export default ArticlePanel;
