// import Home from '../pages/home/home.jsx'
// import About from '../pages/about/about.jsx'
// import Skills from '../pages/skills/skills.jsx';
// import './layout.css'


// const Layout = () =>{
//   return(
//     <main>
//       <Home/>
//       <About/>
//       <Skills/>
//     </main>
//   );
// };

// export default Layout;

import React, { useState, useEffect } from 'react';
import Home from '../pages/home/home.jsx';
import About from '../pages/about/about.jsx';
import Skills from '../pages/skills/skills.jsx';
import UiLeftS from '../components/common/uiLeftS.jsx';
import './layout.css';

const Layout = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home-section');
      if (homeSection) {
        const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
        setIsSticky(homeSectionBottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="layout-container">
      <div className={`left-panel ${isSticky ? 'sticky' : ''}`}>
        <UiLeftS />
      </div>
      <div className="right-panel">
        <section id="home-section">
          <Home />
        </section>
        <section id="about-section">
          <About />
        </section>
        <section id="skills-section">
          <Skills />
        </section>
      </div>
    </div>
  );
};

export default Layout;
