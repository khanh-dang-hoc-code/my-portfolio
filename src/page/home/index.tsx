import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Section from '../../components/section';

const Home = () => {
  const divRef = useRef() as MutableRefObject<HTMLDivElement>;

  const [verticalOffset, setVerticalOffset] = useState(0);

  useEffect(() => {
   const destroy =  window.addEventListener('scroll', function () {
      const verticalOffsetValue =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setVerticalOffset(verticalOffsetValue);
    });
    return () => destroy;
  }, [divRef]);

  return (
    <div ref={divRef}>
      <Header parentPosition={verticalOffset} />

      <Section title="About me">
        <div>section</div>
      </Section>

      <Section title="About me">
        <div>section</div>
      </Section>

      <Section title="About me">
        <div>section</div>
      </Section>

      <Section title="About me">
        <div>section</div>
      </Section>

      <Section title="About me">
        <div>section</div>
      </Section>

      <Section title="About me">
        <div>section</div>
      </Section>
    </div>
  );
};

export default Home;
