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

                <div className='uiLeftContainer'>
                    <UiLeftS />
                </div>

                <div className='aboutRight'>
                    <AboutRightS/>
                </div>

                <div className='skills'>
                    <AboutRightS />
                </div>

                <div className='project'>
                    <AboutRightS />
                </div>



            </section>

        </section>
    );
};

export default Home;

