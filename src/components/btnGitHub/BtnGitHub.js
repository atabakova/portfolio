import './style.css';
import gitHubIcon from './gitHub-black.svg';

function BtnGitHub({ link }) {
  return (
    <a href={link} className="btn-outline" target="_blank" rel="noreferrer">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
}

export default BtnGitHub;
