import ProjectList from '../../components/project/projectList.jsx';
import ProjectInfo from '../../components/project/projectInfo.jsx';
import './projectS.css'


const ProjectS = () => {
    return (
        <article className='bodyProject'>
            
            <section className='projectList'>
                <ProjectList/>
            </section>

            <section className='projectInfo'>
               <ProjectInfo/>
            </section>
            
        </article>
    );
};

export default ProjectS;