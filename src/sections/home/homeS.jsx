import Profile from '../../components/common/profile.jsx'
import Resumen from '../../components/home/resumen.jsx';
import './homeS.css'

const HomeS = () => {
    return (
        <section className="bodyHomeS">

            <section className='profileHomeS'>

                <Profile name={'Ivan el kukas'} title={'Soldadito de peron'}/>

            </section>

            <article className="resumenHomeS">

                <Resumen />

            </article>

        </section>
    );
};

export default HomeS;