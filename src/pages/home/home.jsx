import UiLeftS from '../../components/common/uiLeftS.jsx';
import HomeS from '../../sections/home/homeS.jsx';
import AboutRightS from '../../sections/about/aboutRightS.jsx';
import SkillsS from '../../sections/skills/skillsS.jsx';
import ProjectS from '../../sections/project/projectS.jsx';
import ContactS from '../../sections/contact/contactS.jsx';
import './home.css'


const Home = () => {
    return (
        <section className='bodyMain'>

            <HomeS />

            <section className='bodySections'>

                <aside className='uiLeftContainer'>
                    <UiLeftS />
                </aside>

                <section className='aboutRight'>
                    <AboutRightS />
                </section>

                <section className='skills'>
                    <SkillsS />
                </section>

                <section className='project'>
                    <ProjectS />
                </section>

            </section>

            <section className="contactS">
                <ContactS />
            </section>

        </section>
    );
};

export default Home;
