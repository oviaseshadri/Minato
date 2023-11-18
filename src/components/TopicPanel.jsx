import React from 'react';
import topicsData from '../sampleData/topics.json';

const TopicPanel = () => {
  return (
    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
      {topicsData.map((topic, index) => (
        <div key={index} style={{ ...topicStyle, backgroundImage: `url("../../images/${topic.name}.png")` }}>
          <p style={{ fontWeight: 'bold', fontSize: '18px', textAlign: 'center', margin: '0', color: 'white' }}>{topic.name}</p>
        </div>
      ))}
    </div>
  );
};

const topicStyle = {
  display: 'inline-block',
  margin: '10px',
  padding: '30px', // Adjusted padding for larger panels
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  borderRadius: '15px', // Adjusted border radius for rounded corners
  width: '200px', // Adjusted width for larger panels
};

export default TopicPanel;
