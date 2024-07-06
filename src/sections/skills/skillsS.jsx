import TechSkills from "../../components/skills/techSkills";
import SoftSkills from "../../components/skills/softSkills";
import './skillsS.css'

const SkillsS = () => {
    return(
        <section className="bodySkillsS">
            <article className="tsSkillsS">
                <TechSkills/>
                <SoftSkills/>
            </article>
            <aside className="otherSkillsS">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam harum aliquam, dolores deleniti placeat nesciunt quidem quo non, magnam recusandae amet nisi quisquam tenetur enim ut labore dolore? Iure, ea.
                Molestias consectetur et corporis, architecto dolorum ratione ipsa exercitationem, odio libero nostrum deserunt optio. Officiis autem perferendis laborum praesentium voluptatum quas modi corporis rem. Deleniti modi culpa maiores reprehenderit quo.</p>
            </aside>
        </section>
    );
};

export default SkillsS;