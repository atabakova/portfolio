import './style.css';
import CV from './cv_tabakova_anastasiia.pdf';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Anastasiia Tabakova</em>
          </strong>
          <br /> full-stack developer
        </h1>
        <div className="header__text">
          <p>with love for development</p>
        </div>
        <a href={CV} className="btn" download="CV-PDF-document">
          Download CV
        </a>
      </div>
    </header>
  );
};
