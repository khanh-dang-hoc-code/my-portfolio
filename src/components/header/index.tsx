import React, { useEffect, useRef, useState } from 'react';
import Props from './Props';
import './index.css';

const Header = ({ parentPosition }: Props) => {
  const headerRef = useRef() as React.MutableRefObject<HTMLImageElement>;

  useEffect(() => {
    if (headerRef) {
      if (parentPosition >= 100) {
        headerRef.current.classList.add('header-fixed');
      } else {
        headerRef.current.classList.remove('header-fixed');
      }
    }
  }, [parentPosition]);

  return (
    <div ref={headerRef} className="header">
      <div className="header-context">
        <div className="header-left">
          <div className="header-left-logo">khanh.</div>
        </div>
        <ul className="header-center">
          <li className="header-item">
            <a href="#" className="header-item-text">
                <span className="header-item-text-left">01. </span>
                <span className="header-item-text-right">home</span>
              <span className="header-item-footer-dash"></span>
            </a>
          </li>
          <li className="header-item">
            <a href="#" className="header-item-text">
              <span className="header-item-text-left">02. </span>
              <span className="header-item-text-right">about</span>
              <span className="header-item-footer-dash"></span>
            </a>
          </li>
          <li className="header-item">
            <a href="#" className="header-item-text">
              <span className="header-item-text-left">03. </span>
              <span className="header-item-text-right">resume</span>
              <span className="header-item-footer-dash"></span>
            </a>
          </li>
          <li className="header-item">
            <a href="#" className="header-item-text">
              <span className="header-item-text-left">04. </span>
              <span className="header-item-text-right">works</span>
              <span className="header-item-footer-dash"></span>
            </a>
          </li>
          <li className="header-item">
            <a href="#" className="header-item-text">
              <span className="header-item-text-left">05. </span>
              <span className="header-item-text-right">blog</span>
              <span className="header-item-footer-dash"></span>
            </a>
          </li>
          <li className="header-item">
            <a href="#" className="header-item-text">
              <span className="header-item-text-left">06. </span>
              <span className="header-item-text-right">contact</span>
              <span className="header-item-footer-dash"></span>
            </a>
          </li>
        </ul>
        <div className="header-right">
          <div className="header-button">hire me</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
