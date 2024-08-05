import Profile from '../../components/common/profile.jsx'
import Presentation from '../../components/home/presentation.jsx';
import './homeS.css'

const HomeS = () => {
    return (
        <section className="bodyHomeS">

            <section className='profileHomeS'>

                <Profile name={'Ivan el kukas'} title={'Soldadito de peron'}/>

            </section>

            <article className="presentationHomeS">

                <Presentation />

            </article>

        </section>
    );
};

export default HomeS;