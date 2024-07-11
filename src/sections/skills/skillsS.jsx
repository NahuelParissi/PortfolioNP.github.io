import TechSkills from "../../components/skills/techSkills.jsx";
import SoftSkills from "../../components/skills/softSkills.jsx";
import OtherSkills from "../../components/skills/otherSkills.jsx";
import './skillsS.css';

const SkillsS = () => {
    return(
        <section className="bodySkillsS">
            
            <article className="tsSkillsS">
                <TechSkills/>
                <SoftSkills/>
            </article>

            <aside className="oSkillsS">
                <OtherSkills/>
            </aside>

        </section>
    );
};

export default SkillsS;

// Estructura terminada falta Estilar y animar los componentes