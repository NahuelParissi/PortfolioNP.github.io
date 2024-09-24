// Libreria react-Scroll sin uso
import './home.css';
import UiLeftS from '../../components/common/uiLeftS.jsx';
import HomeS from '../../sections/home/homeS.jsx';
import AboutS from '../../sections/about/aboutS.jsx';
import SkillsS from '../../sections/skills/skillsS.jsx';
import ProjectS from '../../sections/project/projectS.jsx';
import ContactS from '../../sections/contact/contactS.jsx';
import React, { useState, useEffect, useRef } from 'react';


const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.className);
        }
      });
    }, options);

    sectionsRef.current.forEach(section => observer.observe(section));

    return () => {
      sectionsRef.current.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <section className='bodyMain'>
      <section className="home" ref={(el) => (sectionsRef.current[0] = el)}>
        <HomeS />
      </section>
      <aside className='uiLeft'>
        <UiLeftS activeSection={activeSection} />
      </aside>
      <section className='about' ref={(el) => (sectionsRef.current[1] = el)}>
        <AboutS />
      </section>
      <section className='skills' ref={(el) => (sectionsRef.current[2] = el)}>
        <SkillsS />
      </section>
      <section className='project' ref={(el) => (sectionsRef.current[3] = el)}>
        <ProjectS />
      </section>
      <section className="form" ref={(el) => (sectionsRef.current[4] = el)}>
        <ContactS />
      </section>
    </section>
  );
}

export default Home;
