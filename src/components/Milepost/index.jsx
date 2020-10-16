import React, { useState, useEffect } from 'react';
import "./index.less"
import axios from '../../utils/axios'

export default function Milepost() {
  const [milepost, setMilepost] = useState([]);

  //从后端初始化Milepost数据
  useEffect(() => {
    axios.get('/api/getMilepost').then(({ data }) => {
      setMilepost(data);
    }).catch(error => {
      console.error('axios报错:', error)
    })
  }, [])


  return (
    <div className="milepost">
      <div className="milepost-title">
        里程碑
      </div>
      {/* 新增一层用于隐藏滚动条 */}
      <div className="milepost-show-outer">
        <div className="milepost-show">
          {milepost.map(item => {
            return (
              <div className="milepost-item" key={item.id}>
                <div className="milepost-item-date">
                  {item.date}
                </div>
                <div className="milepost-item-content">
                  {item.content}
                </div>
              </div>
            )
          })}
        </div>
        {/* 遮罩层 */}
        <div className="milepost-show-cover milepost-show-cover-left" />
        <div className="milepost-show-cover milepost-show-cover-right" />
      </div>
    </div>
  );
}