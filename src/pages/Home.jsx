import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Bienvenue sur Milestone</h1>
      <p>Relevez des défis, progressez et obtenez des récompenses uniques.</p>
      <div className="buttons">
        <Link to="/categories" className="btn">Explorer les défis</Link>
        <Link to="/profile" className="btn">Voir mon profil</Link>
      </div>
    </div>
  );
};

export default Home;