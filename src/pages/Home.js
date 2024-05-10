import { Header } from './../components/header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Programming Languages:</h2>
              <p>Main: PHP, JavaScript</p>
              <p>Others: Go (Junior Level), JSX, SQL, HTML/CSS</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Frameworks and Technologies:</h2>
              <p>
                Web Development: ReactJS, Redux, Laravel, Yii (v1, v2),
                Wordpress, Drupal
              </p>
              <p>UI Frameworks: Bootstrap, jQuery</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Database Management Systems (DBMS):</h2>
              <p>
                MySQL, ElasticSearch, OpenSearch, Redis, MongoDB, Clickhouse,
                PostgreSQL
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">DevOps Technologies:</h2>
              <p>
                GIT, Docker, Kubernetes, DevSpace, RabbitMQ, Kafka, CI/CD, CRON,
                Mailhog
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Testing Tools:</h2>
              <p>Codeception, PHPUnit (Unit Tests), XDebug</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
