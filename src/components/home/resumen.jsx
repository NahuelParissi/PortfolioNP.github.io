import Button from '../common/button.jsx'
import './resumen.css'

const Resumen = () => {
    return (
        <section className='bodyResumen'>
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

            <section className='buttonsHomeS'>

                <Button name='Contacto' />

                <Button name='Ver CV' />

            </section>

        </section>
    );
};

export default Resumen;