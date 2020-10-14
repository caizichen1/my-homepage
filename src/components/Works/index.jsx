import React, { useState } from 'react';
import "./index.less"

export default function Works() {
  const [works, setWorks] = useState([
    {
      id: 1,
      img: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
      url: 'https://www.baidu.com',
      title: '百度一下',
      content: '百度一下，你就知道',
      desc: '暂无作品，占位置',
    },
    {
      id: 2,
      img: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
      url: 'https://www.baidu.com',
      title: '百度一下',
      content: '百度一下，你就知道',
      desc: '暂无作品，占位置',
    },
  ]);

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