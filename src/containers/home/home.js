import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { FaRobot, FaCommentAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="cards-container">
      <Link to='/page1' className="card">
        <div className="icon">
          <FaRobot />
        </div>
        <div className="content">
          <h3>Title 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </Link>

      <Link to="/page2" className="card">
        <div className="icon">
          <i className="fas fa-laptop"></i>
        </div>
        <div className="content">
          <h3>Title 2</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        </div>
      </Link>

      <Link to="/page3" className="card">
        <div className="icon">
          <i className="fas fa-envelope"></i>
        </div>
        <div className="content">
          <h3>Title 3</h3>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </Link>

      <Link to="/page4" className="card">
        <div className="icon">
          <i className="fas fa-phone"></i>
        </div>
        <div className="content">
          <h3>Title 4</h3>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </Link>

      <Link to="/page5" className="card">
        <div className="icon">
          <i className="fas fa-user"></i>
        </div>
        <div className="content">
          <h3>Title 5</h3>
          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
      </Link>

      <Link to="/page6" className="card">
        <div className="icon">
          <i className="fas fa-camera"></i>
        </div>
        <div className="content">
          <h3>Title 6</h3>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
        </div>
      </Link>

      <div className="message-icon">
        <FaCommentAlt />
      </div>
    </div>
  );
};

export default Home;

 