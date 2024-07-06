import './profile.css'

const Profile = ({ name }) => {
    return (
        <section className='profile'>

            <img src="../../../public/img/LilKlinger.jpg" alt="Foto del perfil" />

            <h1 className='title'>{name} <br/> Desarrollador web</h1>

        </section>
    );
};

export default Profile;