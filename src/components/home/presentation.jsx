import Button from '../common/button.jsx'
import './presentation.css'

const Presentation = () => {
    return (
        <section className='bodyPresentation'>
            <p>
                Los muchachos peronistas,
                todos unidos triunfaremos,
                y como siempre daremos
                un grito de corazón:
                «¡Viva Perón, viva Perón!».

                Por ese gran argentino
                que se supo conquistar
                a la gran masa del pueblo,
                Combatiendo al capital.

                ¡Perón, Perón, qué grande sos!
                ¡Mi general, cuánto valés!
                Perón, Perón, gran conductor,
                sos el primer trabajador
            </p>

            <section className='buttonsPresentationS'>

                <Button name='Contacto' />

                <Button name='Ver CV' />

            </section>

        </section>
    );
};

export default Presentation;