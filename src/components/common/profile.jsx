import './profile.css'

const Profile = ({ name , title}) => {

    const imgprofile = "../../../public/img/Fto de perfil.jpeg"

    return (
        <section className='bodyProfile'>

            <img src={imgprofile} alt="Foto del perfil" className='imgProfile' />

            <h1 className='titleProfile'>{name} <br/> {title}</h1>

        </section>
    );
};

export default Profile;