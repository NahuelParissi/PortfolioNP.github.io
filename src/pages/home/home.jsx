import HomeS from '../../sections/home/homeS.jsx';
import AboutRightS from '../../sections/about/aboutRightS.jsx';
import SkillsS from '../../sections/skills/skillsS.jsx';
import UiLeftS from '../../components/common/uiLeftS.jsx';
import './home.css'


const Home = () => {
    return (
        <section className='bodyMain'>

            <HomeS />

            <section className='bodySections'>

                <aside className='stickySections'>
                    <UiLeftS/>
                </aside>

                <article className='dynamicSections'>

                    <AboutRightS />

                    {/* <SkillsS /> */}

                    {/* <ProjectS/> */}

                </article>

            </section>

        </section>
    );
};

export default Home;

