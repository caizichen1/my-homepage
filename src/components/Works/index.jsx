import React, { useState, useEffect } from 'react';
import "./index.less"
import axios from '../../utils/axios'

export default function Works() {
  const [works, setWorks] = useState([]);

  //从后端初始化Works数据
  useEffect(() => {
    axios.get('/api/getWorks').then(({ data }) => {
      setWorks(data);
    }).catch(error => {
      console.error('axios报错:', error)
    })
  }, [])


  const goWork = (url) => {
    window.open(url);
  }

  return (
    <div className="works">
      <div className="works-title">
        我的作品
      </div>
      <div className="works-show">
        {works.map(item => {
          return (
            <div key={item.id} className="work-item" onClick={() => goWork(item.url)}>
              <img className="work-item-img" src={item.img} alt={item.desc} />
              <div className="work-item-title">
                {item.title}
              </div>
              <div className="work-item-content">
                {item.content}
              </div>
              <div className="work-item-desc">
                {item.desc}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}