import React, { useState } from 'react';
import "./index.less"

export default function About() {
  const [aboutLabel, setAboutLabel] = useState([
    {
      id: 1,
      label: '标签1',
    },
    {
      id: 2,
      label: '长一点的标签2',
    }
  ]);
  const [aboutContent, setAboutContent] = useState('预设数据<br/>预设数据');

  return (
    <div className="about">
      <div className="about-title">
        关于我
      </div>
      <div className="about-label">
        {aboutLabel.map(item => {
          return <div className="about-label-item" key={item.id}>{item.label}</div>
        })}
      </div>
      <div className="about-content" dangerouslySetInnerHTML={{ __html: aboutContent }} />
    </div>
  );
}