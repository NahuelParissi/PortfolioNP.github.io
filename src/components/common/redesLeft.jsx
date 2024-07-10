import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import Button from './button.jsx';
import './redesLeft.css'


const RedesLeft = () => {
    return (

        <section className='bodyContact' >

            <section className='contactIcon'>

                <a href="https://www.linkedin.com/in/nahuelparisi/" target='_blank'>
                    <LinkedInLogoIcon width={40} height={40} />
                </a>


                <a href="https://www.linkedin.com/in/nahuelparisi/" target='_blank'>
                    <GitHubLogoIcon width={40} height={40} />
                </a>

                {/* Cambiar iconos y agregar efectos al hover */}

            </section>

            <section>

                <Button name='Contact me' url='https://www.linkedin.com/in/nahuelparisi/' />

            </section>

        </section>

    );
};

export default RedesLeft;

