import Profile from '../../components/common/profile.jsx'
import Presentation from '../../components/home/presentation.jsx';
import './homeS.css'

const HomeS = () => {
    return (
        <section className="bodyHomeS">

            <section className="leftHomeS">
                Animacion de cascada de tecnologias
            </section>

            <section className="centerHomeS">

                <article className='profileHomeS'>

                    <Profile name={'Ivan el kukas'} title={'Soldadito de peron'} />

                </article>

                <article className="presentationHomeS">

                    <Presentation />

                </article>

            </section>

            <section className="rightHomeS">
                Animacion de cascada de Apps
            </section>

        </section>
    );
};

export default HomeS;