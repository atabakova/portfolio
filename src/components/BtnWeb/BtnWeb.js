import './style.css';

const BtnWeb = ({ link }) => {
  return (
    <a href={link} className="btn-outline" target="_blank" rel="noreferrer">
      Demo
    </a>
  );
};

export default BtnWeb;
