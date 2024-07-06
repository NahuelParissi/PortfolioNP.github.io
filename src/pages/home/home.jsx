import Profile from '../../components/common/profile.jsx'
import './home.css'

const Home = () => {
    return (
        <section className="bodyHome">
            <aside className="profileHome">
                <Profile name={'Ivo el kukas'} />
            </aside>
            <article className="resumenHome">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque aut voluptates veritatis illum velit, nihil provident commodi, ratione excepturi delectus libero hic reiciendis debitis dignissimos sequi harum architecto ut nisi!
                </p>
                <section className='buttonsHomes'>
                <button> contacto</button>
                <button> ver cv</button>
                </section>
            </article>
        </section>
    );
};

export default Home;

// Arreglar 
// No usa ninga seccion se debe mover todo el codigo al seccion y este home.jsx debe llamar al seccion
