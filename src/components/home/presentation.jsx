import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import Button from '../common/button.jsx'
import './presentation.css'

const Presentation = () => {

    return (
        <section className='bodyPresentation'>
            
            <section className="infoPresentation">

                <h1 className='namePresentation'>
                    Nahuel Parisi
                </h1>

                <h2 className='titlePresentation'>
                    Programador web full-stack &lt;/&gt;
                </h2>

                <section className='textPresentation'>
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
                </section>
            </section>

            <section className='buttonsPresentationS'>

                <section className="leftButtons">

                    <a href="https://www.linkedin.com/in/nahuelparisi/" target='_blank'>
                        <LinkedInLogoIcon color="#FBFBFB" width={35} height={35} />
                    </a>

                    <a href="https://github.com/NahuelParissi" target='_blank'>
                        <GitHubLogoIcon color="#FBFBFB" width={35} height={35} />
                    </a>

                    <a href="#contacto">
                        <EnvelopeClosedIcon color="#FBFBFB" width={35} height={35} />
                    </a>

                </section>

                <a href="https://drive.google.com/file/d/1-O74IdOGvIq_7F_KA_Xq2EXJianP9SAy/view?usp=sharing" target='_blank'>

                    <Button name='Ver CV' />

                </a>

            </section>

        </section>
    );
};

export default Presentation;