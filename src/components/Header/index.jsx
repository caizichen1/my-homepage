import React from 'react';
import "./index.less"

export default function Header() {

  //锚点定位
  const scroll = (className) => {
    const element = document.getElementsByClassName(className)[0];
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <div name="home" className="header-nav">
      <div className="header-nav-logo">logo</div>
      <div className="header-nav-label">
        <span onClick={() => scroll('milepost')} className="header-nav-link">里程碑</span>
        <span onClick={() => scroll('works')} className="header-nav-link">作品</span>
        <span onClick={() => scroll('about')} className="header-nav-link">关于</span>
        <span onClick={() => scroll('home')} className="header-nav-link">首页</span>
      </div>
    </div>
  );
}