import ProfessionalA from '../../components/about/professionalA.jsx'
import Career from '../../components/about/career.jsx'
import './aboutS.css'


const AboutS = () => {
    return (
        <section className='bodyAbout'>

            <article className='aboutProfessional'>
                <ProfessionalA/>
            </article>

            <article className='aboutcareer'>
               <Career/>
            </article>
            
        </section>
    );
};

export default AboutS;

// Estructura terminada falta Estilar y animar los componentes