import './uiLeftS.css'
import RedesLeft from './redesLeft.jsx'
import Profile from './profile.jsx'
import PersonalA from '../about/personalA.jsx'

const UiLeftS = () => {
    return (
        <section className='bodyLeft'>
            {/* Estos datos pueden entrar como variables y cambiar dependiendo de lo que se muestre en el HomeRight */}
            <section className='profileLeft'>
                <Profile />
            </section>

            <section className='descriptionLeft'>

                {/* Componentes que dan informacion relacionada a la seccion de la derecha */}
                <PersonalA/>

            </section>

            <section className='contactLeft'>

                <RedesLeft />

            </section>
        </section>
    );
};

export default UiLeftS;
