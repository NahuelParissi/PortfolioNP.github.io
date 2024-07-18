import UiLeftS from '../../components/common/uiLeftS.jsx';
import HomeS from '../../sections/home/homeS.jsx';
import AboutS from '../../sections/about/aboutS.jsx';
import SkillsS from '../../sections/skills/skillsS.jsx';
import ProjectS from '../../sections/project/projectS.jsx';
import ContactS from '../../sections/contact/contactS.jsx';
import './home.css'


const Home = () => {
  return (
    <section className='bodyMain'>

      <section className="home">
        <HomeS />
      </section>


      <aside className='uiLeft'>
        <UiLeftS />
      </aside>

      <section className='about'>
        <AboutS />
      </section>

      <section className='skills'>
        <SkillsS />
      </section>

      <section className='project'>
        <ProjectS />
      </section>

      <section className="form">
        <ContactS />
      </section>

    </section >
  );
};

export default Home;



// import React, { useState, useEffect } from 'react';
// import UiLeftS from '../../components/common/uiLeftS.jsx';
// import HomeS from '../../sections/home/homeS.jsx';
// import AboutS from '../../sections/about/aboutS.jsx';
// import SkillsS from '../../sections/skills/skillsS.jsx';
// import ProjectS from '../../sections/project/projectS.jsx';
// import './home.css';

// const useScrollPosition = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return scrollPosition;
// };

// const Home = () => {
//   const scrollPosition = useScrollPosition();
//   const [width, setWidth] = useState('100%');
//   const [singleColumnLayout, setSingleColumnLayout] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//         setWidth('200%');
//         setSingleColumnLayout(`1fr`);
//       } else {
//         setWidth('100%');
//         setSingleColumnLayout(false);
//       }
//     };

//     window.addEventListener('scroll', handleResize);
//     return () => {
//       window.removeEventListener('scroll', handleResize);
//     };
//   }, [scrollPosition]);

//   return (
//     <section className='bodyMain'>
//       <HomeS />

//       <section className='bodySections' style={{ gridTemplateColumns: singleColumnLayout ? 'auto' : 'auto 70%' }}>
//         <aside className='uiLeftContainer' style={{ width: width, transition: 'width 0.5s ease-in-out' }}>
//           <UiLeftS />
//         </aside>

//         <section className='aboutS'>
//           <AboutS />
//         </section>

//         <section className='skillsS'>
//           <SkillsS />
//         </section>

//         <section className='projectS'>
//           <ProjectS />
//         </section>

//         <section className='contactS'></section>
//       </section>
//     </section>
//   );
// };

// export default Home;



