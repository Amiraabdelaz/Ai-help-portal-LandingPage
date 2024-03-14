import React from 'react';
import './hash.css';
import Cards from './cards';
const Hash = () => {
  return (
    <div className='hash'>
      <h1>Hashnode for teams.</h1>
      <h4>
        Get your team's voice heard.Launch an engineering blog,a
        <br />
         product updates page,or a company culture showcase.
      </h4>
      <button className='btn-1'> Start a team blog</button>
      <button className='btn-2'> Learn more </button>

      <Cards />
    </div>
  );
};

export default Hash;
