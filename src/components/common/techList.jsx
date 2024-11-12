import './techList.css'

function LanguageList() {
  const languages = ['Javascript', 'Java', 'HTML', 'CSS', 'Git', 'Github', 'SQL', 'React.js', 'Node.js'];

  return (
    <ul className="language-list animate">
      {languages.map((language, index) => (
        <li key={index}>{language}</li>
      ))}
    </ul>
  );
}

export default LanguageList;