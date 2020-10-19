import React, { useState, useEffect } from 'react';
import "./index.less"
import axios from '../../utils/axios'

export default function About() {
  const [aboutLabel, setAboutLabel] = useState([]);
  const [aboutContent, setAboutContent] = useState([]);

 

  //从后端初始化About数据
  useEffect(() => {
    axios.get('/api/getAboutMsg').then(({ data }) => {
      setAboutLabel(data.aboutLabelResult)
      setAboutContent(data.aboutContentResult)
    }).catch(error => {
      console.error('axios报错:', error)
    })
  }, [])


  return (
    <div className="about">
      <div className="about-title">
        关于我
      </div>
      <div className="about-label">
        {aboutLabel.map(item => {
          return <div className="about-label-item" key={item.id}>{item.aboutLabel}</div>
        })}
      </div>
      <div className="about-content" >
        {aboutContent.map(item => {
          return <div className="about-content-item" key={item.id} dangerouslySetInnerHTML={{ __html: item.aboutContent }} />
        })}
      </div>
    </div>
  );
}