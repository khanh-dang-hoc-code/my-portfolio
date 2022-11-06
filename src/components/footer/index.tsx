import React from 'react';
import './index.css';
import Icon from '../../assets/icon/icon'

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-left">
        <li className="footer-left-item">
          <a href="#" className="footer-left-icon">
            <img className='footer-left-icon-content' src={Icon.facebook} alt='facebook' />
          </a>
        </li>
        <li className="footer-left-item">
          <a href="#" className="footer-left-icon">
            <img src={Icon.github} alt='facebook' />
          </a>
        </li>
        <li className="footer-left-item">
          <a href="#" className="footer-left-icon">
            <img src={Icon.linkedin} alt='facebook' />
          </a>
        </li>
        <li className="footer-left-item">
          <a href="#" className="footer-left-icon">
            <img src={Icon.twitter} alt='facebook' />
          </a>
        </li>
        {/* <li className="footer-left-item">
          <a href="#" className="footer-left-icon">
            <img src={Icon.facebook} alt='facebook' />
          </a>
        </li> */}
      </ul>
      <div className="footer-right">
        <div className='footer-right-text'>2022</div>
      </div>
    </div>
  );
};

export default Footer;
