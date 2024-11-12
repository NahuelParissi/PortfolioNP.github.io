import Presentation from '../../components/home/presentation.jsx';
import LanguageList from '../../components/common/techList.jsx';
import './homeS.css'


const HomeS = () => {

    const imgprofile = "../../../public/img/Fto de perfil 2.jpeg"

    return (
        <section className="bodyHomeS">

            <section className='upperHomeS'>

                <section className='homePresentation'>
                    <Presentation />
                </section>

                <section className="homeProfile">
                    <img src={imgprofile} alt="Foto del perfil" className='imgProfileHome' />
                </section>

            </section>

            <section className='lowerHomeS'>

                <LanguageList />

            </section>


        </section>
    );
};

export default HomeS;