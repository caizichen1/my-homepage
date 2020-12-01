import React from 'react';
import "./index.less";
import Arrow from '../Arrow/index'
import { useRef } from 'react';

export default function Home() {
  const homeRef = useRef(null)

  const scrollScreen = () => { 
    const scrollTop = homeRef.current.scrollHeight;
    window.scroll({
      top: scrollTop,
      behavior: 'smooth'
    });
  }

  return (
    <div className="home" ref={homeRef}>
      <div className="home-title" >
        Do something you enjoy
      </div>
      <div className="home-arrow" onClick={scrollScreen}>
        <Arrow />
      </div>
    </div>
  );
}