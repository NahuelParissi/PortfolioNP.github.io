import './button.css';

const Button = ({ name, url }) => {
  return (
    <button className='bodyButton'>
      <a href={url} target='_blank' rel="noopener noreferrer">
        {name}
      </a>
    </button>
  );
};

export default Button;
