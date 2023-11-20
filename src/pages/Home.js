import { Header } from './../components/header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, React, JSX, React Router, HTML/CSS, BootStrap, GIT,
                REST API, OpenAPI, Swagger, Wordpress, Drupal, VS Code, jQuery
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>PHP, SQL, MySQL, Laravel, PHPMyAdmin</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
