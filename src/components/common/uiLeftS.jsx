import RedesLeft from './redesLeft.jsx';
import Profile from './profile.jsx';
import Hobbies from '../about/hobbies.jsx';
import './uiLeftS.css'

const UiLeftS = ({ }) => {
    return (
        <aside className='bodyUiLeft'>

            <section className='bodyLeft'>

                <section className='profile'>
                    <Profile name='Santiago' />
                </section>

                <section className='dynamicDescription'>

                    {/* Componentes que dan informacion relacionada a la seccion de la derecha */}
                    <Hobbies />

                </section>

                <section className='contact'>

                    <RedesLeft />

                </section>
            </section>

        </aside>
    );
};

export default UiLeftS;
