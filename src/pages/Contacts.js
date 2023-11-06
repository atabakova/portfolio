export const Contacts = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Lisbon, Portugal</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">WhatsApp</h2>
              <p>
                <a href="tel:+79198311690">+7 (919) 831 16-90</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:atabakova2016@gmail.com">
                  atabakova2016@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
