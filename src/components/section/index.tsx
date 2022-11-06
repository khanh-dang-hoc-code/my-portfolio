import React from 'react';
import Props from './Props';
import './index.css';

const Section = ({ title, children }: Props) => {
  return (
    <div className="section">
      <div className="section-container">
        <div className="section-title">
          <h2 className='section-title-heading'>{title}</h2>
          <div className="section-title-loading">
            <div className="section-title-loading-dot"></div>
          </div>
          <div className="section-title-heading-hidden">
            {title}
          </div>
        </div>
        <div className="section-content">{children}</div>
      </div>
    </div>
  );
};

export default Section;
