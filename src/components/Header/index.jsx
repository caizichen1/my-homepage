import React from 'react';
import "./index.less"

export default function Header() {
  return (
    <div name="home" className="header-nav">
      <div className="header-nav-logo">logo</div>
      <div className="header-nav-label">
        <a href="#milepost" className="header-nav-link">里程碑</a>
        <a href="#works" className="header-nav-link">作品</a>
        <a href="#about" className="header-nav-link">关于</a>
        <a href="#home" className="header-nav-link">首页</a>
      </div>
    </div>
  );
}