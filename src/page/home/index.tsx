import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import Icon from '../../assets/icon/icon';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Section from '../../components/section';
import './index.css';

const introduceMessages = ['Fullstack Developer', 'Mobile Developer', 'Ngoc Khanh'];

const Home = () => {
  const divRef = useRef() as MutableRefObject<HTMLDivElement>;

  const [verticalOffset, setVerticalOffset] = useState(0);
  const [introduceMessage, setIntroduceMessage] = useState('');

  useEffect(() => {
    const destroy = window.addEventListener('scroll', function () {
      const verticalOffsetValue =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setVerticalOffset(verticalOffsetValue);
    });
    return () => destroy;
  }, [divRef]);

  useEffect(() => {
    let index = 0;
    let time = 0;
    const length = introduceMessages.length;
    const introduceString = introduceMessages[index];
    time = introduceString.length * 2 * 300;
    let indexIntroduceString = 0;
    let flagGrow = true;
    let a = '';
    // setInterval(() => {
    //   introduceString = introduceMessages[index];
      setInterval(() => {
        if (indexIntroduceString === introduceString.length) {
          flagGrow = false;
        }
        if (flagGrow) {
          a += introduceString.charAt(indexIntroduceString);
          indexIntroduceString++;
        } else {
          a = a.slice(0, indexIntroduceString);
          indexIntroduceString--;
        }
        setIntroduceMessage(a);
      }, 200);
      index++;
    // }, time);

    index++;
    if (index === length) {
      index = 0;
    }
  }, []);

  return (
    <div ref={divRef}>
      <Header parentPosition={verticalOffset} />
      <section className="slider">
        <div className="slider-container">
          <div className="slider-content">
            <div className="introduce-message">Hi, I am {introduceMessage}</div>
            <div className="introduce-static">
              I am a frontend web developer. I can provide clean code and pixel perfect design. I
              also make website more & more interactive with web animations.
            </div>
          </div>
          <div className="slider-scrollDown">
            <img className="slider-scrollDown-icon" src={Icon.scrollDown} />
            <div className="slider-scrollDown-text">Scroll Down</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
