import './aboutRightS.css'
import ProfessionalA from '../../components/about/professionalA.jsx'
import Career from '../../components/about/career.jsx'


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



