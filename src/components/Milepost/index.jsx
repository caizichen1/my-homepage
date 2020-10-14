import React, { useState } from 'react';
import "./index.less"

export default function Milepost() {
  const [milepost, setMilepost] = useState([
    {
      id: 1,
      date: '2020.10.12',
      content: '虚拟滚动测试',
    },
    {
      id: 2,
      date: '2020.10.13',
      content: '虚拟滚动测试',
    },
    {
      id: 3,
      date: '2020.10.13',
      content: '虚拟滚动测试',
    },
    {
      id: 4,
      date: '2020.10.13',
      content: '虚拟滚动测试',
    },
    {
      id: 5,
      date: '2020.10.13',
      content: '虚拟滚动测试',
    },
    {
      id: 6,
      date: '2020.10.13',
      content: '虚拟滚动测试',
    },
    {
      id: 7,
      date: '2020.10.13',
      content: '虚拟滚动测试',
    },
  ]);

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