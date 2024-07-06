import { InstagramLogoIcon, LinkedInLogoIcon, GitHubLogoIcon, DiscordLogoIcon } from '@radix-ui/react-icons'
import './redesLeft.css'


const RedesLeft = () => {
    return (
        <section className='bodyContact'>

            <section className='contactIcon' >

                <InstagramLogoIcon width={40} height={40} />

                <LinkedInLogoIcon width={40} height={40} />

                <GitHubLogoIcon width={40} height={40} />

                <DiscordLogoIcon width={40} height={40} />

            </section>

            <section className='contactButton'>
                {/* Boton que despliega un formulario de contacto */}
                <button className='button'>
                    Contact Me
                </button>
            </section>
        </section>
    );
};

export default RedesLeft;

/*Faltan terminar los detalles pero la estrucutra ya esta*/