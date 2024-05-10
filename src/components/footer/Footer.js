import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import twitter from './../../img/icons/twitter.svg';
import gitHub from './../../img/icons/gitHub.svg';
import leetcode from './../../img/icons/leetcode.svg';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {/* <li className="social__item">
              <a href="#!">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={instagram} alt="Link" />
              </a>
            </li>

            <li className="social__item">
              <a href="#!">
                <img src={twitter} alt="Link" />
              </a>
            </li> */}

            <li className="social__item">
              <a href="https://github.com/atabakova">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/anastasiia-tabakova-0a296b14a/">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://leetcode.com/progress/">
                <img src={leetcode} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
