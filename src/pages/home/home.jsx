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