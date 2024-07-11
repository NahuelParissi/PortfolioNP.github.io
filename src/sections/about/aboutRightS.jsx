import ProfessionalA from '../../components/about/professionalA.jsx'
import Career from '../../components/about/career.jsx'
import './aboutRightS.css'


const AboutRightS = () => {
    return (
        <section className='bodyRight'>

            <article className='aboutProfessional'>
                <ProfessionalA/>
            </article>

            <article className='aboutcareer'>
               <Career/>
            </article>
            
        </section>
    );
};

export default AboutRightS;

// Estructura terminada falta Estilar y animar los componentes