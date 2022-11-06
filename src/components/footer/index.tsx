import React, { ImgHTMLAttributes, useCallback, useEffect, useRef } from 'react';
import './index.css';
import Icon from '../../assets/icon/icon';
import { useHover } from '../../customHooks';

const Footer = () => {
  const iconFRef = useRef() as React.MutableRefObject<HTMLImageElement> | null;
  const iconFRefSp = useRef() as React.MutableRefObject<HTMLImageElement> | null;

  const iconGRef = useRef() as React.MutableRefObject<HTMLImageElement> | null;
  const iconGRefSp = useRef() as React.MutableRefObject<HTMLImageElement> | null;

  const iconTRef = useRef() as React.MutableRefObject<HTMLImageElement> | null;
  const iconTRefSp = useRef() as React.MutableRefObject<HTMLImageElement> | null;

  const iconLRef = useRef() as React.MutableRefObject<HTMLImageElement> | null;
  const iconLRefSp = useRef() as React.MutableRefObject<HTMLImageElement> | null;

  const { ref: hoverFRef, value: isFHover } = useHover();
  const { ref: hoverGRef, value: isGHover } = useHover();
  const { ref: hoverTRef, value: isTHover } = useHover();
  const { ref: hoverLRef, value: isLHover } = useHover();

  const iconAnimation = useCallback(
    (
      isHover: boolean,
      ref: React.MutableRefObject<HTMLImageElement> | null,
      spRef: React.MutableRefObject<HTMLImageElement> | null
    ) => {
      if (ref && spRef) {
        ref.current.classList.remove('footer-icon-animation-down');
        spRef.current.classList.remove('footer-icon-animation-down');
        ref.current.classList.remove('footer-icon-animation-top');
        spRef.current.classList.remove('footer-icon-animation-top');
        if (isHover) {
          ref.current.classList.add('footer-icon-animation-top');
          spRef.current.classList.add('footer-icon-animation-top');
        } else {
          ref.current.classList.add('footer-icon-animation-down');
          spRef.current.classList.add('footer-icon-animation-down');
        }
      }
    },
    []
  );

  useEffect(() => {
    iconAnimation(isFHover, iconFRef, iconFRefSp);
    iconAnimation(isTHover, iconTRef, iconTRefSp);
    iconAnimation(isGHover, iconGRef, iconGRefSp);
    iconAnimation(isLHover, iconLRef, iconLRefSp);
  }, [isFHover, isGHover, isLHover, isTHover]);

  return (
    <div className="footer">
      <ul className="footer-left">
        <li className="footer-left-item">
          <a ref={hoverFRef} href="#" className="footer-left-icon">
            <img
              ref={iconFRef}
              className="footer-left-icon-content"
              src={Icon.facebook}
              alt="facebook"></img>
            <img
              ref={iconFRefSp}
              className="footer-left-icon-content footer-icon-spacial"
              src={Icon.facebookThin}
              alt="facebook"
            />
          </a>
        </li>
        <li className="footer-left-item">
          <a ref={hoverGRef} href="#" className="footer-left-icon">
            <img
              ref={iconGRef}
              className="footer-left-icon-content"
              src={Icon.github}
              alt="facebook"
            />
            <img
              ref={iconGRefSp}
              className="footer-left-icon-content footer-icon-spacial"
              src={Icon.facebookThin}
              alt="facebook"
            />
          </a>
        </li>
        <li className="footer-left-item">
          <a ref={hoverLRef} href="#" className="footer-left-icon">
            <img
              ref={iconLRef}
              className="footer-left-icon-content"
              src={Icon.linkedin}
              alt="facebook"
            />
            <img
              ref={iconLRefSp}
              className="footer-left-icon-content footer-icon-spacial"
              src={Icon.facebookThin}
              alt="facebook"
            />
          </a>
        </li>
        <li className="footer-left-item">
          <a ref={hoverTRef} href="#" className="footer-left-icon">
            <img
              ref={iconTRef}
              className="footer-left-icon-content"
              src={Icon.twitter}
              alt="facebook"
            />
            <img
              ref={iconTRefSp}
              className="footer-left-icon-content footer-icon-spacial"
              src={Icon.facebookThin}
              alt="facebook"
            />
          </a>
        </li>
        {/* <li className="footer-left-item">
          <a href="#" className="footer-left-icon">
            <img src={Icon.facebook} alt='facebook' />
          </a>
        </li> */}
      </ul>
      <div className="footer-right">
        <div className="footer-right-text">2022</div>
      </div>
    </div>
  );
};

export default Footer;
