import React from 'react';
import Hobbies from '../about/hobbies.jsx';
import Summary from '../contact/summary.jsx';
import SkillsToLearn from '../skills/skillsToLearn.jsx';
import ProjectTech from '../project/projectTech.jsx';

const Dinamic = ({ activeSection }) => {
  let content;
  switch (activeSection) {
    case 'about':
      content = <Hobbies />;
      break;
    case 'skills':
      content = <SkillsToLearn />;
      break;
    case 'project':
      content = <ProjectTech />;
      break;
    case 'form':
      content = <Summary />;
      break;
    default:
      content = <Hobbies />;
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default Dinamic;
