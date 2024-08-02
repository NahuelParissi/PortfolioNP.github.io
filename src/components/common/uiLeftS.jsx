import RedesLeft from './redesLeft.jsx';
import Profile from './profile.jsx';
import Dinamic from './dinamic.jsx'
import './uiLeftS.css';

const UiLeftS = ({ activeSection }) => {
  return (
    <aside className='bodyUiLeft'>

      <section className='bodyLeft'>

        <section className='profile'>
          <Profile name='Santiago' />
        </section>

        <Dinamic activeSection={activeSection} />

        <section className='contact'>
          <RedesLeft />
        </section>

      </section>

    </aside>
  );
};

export default UiLeftS;
