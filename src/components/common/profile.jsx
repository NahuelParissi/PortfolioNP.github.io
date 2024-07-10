import './profile.css'

const Profile = ({ name , title}) => {
    return (
        <section className='bodyProfile'>

            <img src="../../../public/img/LilKlinger.jpg" alt="Foto del perfil" className='imgProfile' />

            <h1 className='titleProfile'>{name} <br/> {title}</h1>

        </section>
    );
};

export default Profile;