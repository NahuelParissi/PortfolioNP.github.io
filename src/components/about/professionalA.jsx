import Typewriter from 'typewriter-effect';
import './professionalA.css';

const ProfessionalA = () => {
    return (
        <article className='bodyProfessionalA'>
            <div className='textProfessionalA'>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(2500)
                            .typeString('11111111111111111111111111111111111111111111.')
                            .pauseFor(300)
                            .typeString(' 222222222222222222222222222222222222222222222233333!')
                            .pauseFor(300)
                            .deleteChars(10)
                            .typeString(' 5555555555555555555555555555.')
                            .pauseFor(1000)
                            .start();
                    }}
                />
            </div>
        </article>
    );
};

export default ProfessionalA;

// agregar texto