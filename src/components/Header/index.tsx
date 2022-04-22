import React from 'react';

import ImgBand from 'assets/images/devmemory_logo.png';

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="img-fluid" src={ImgBand} alt="" width={150} />
        </a>
      </div>
    </nav>
  );
};

export { Header };
