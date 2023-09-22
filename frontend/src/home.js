import React from 'react';
import './page.css';
import { Link } from 'react-router-dom';
import AuthPage from './login';

function Home() {
  return (
    <div className="home-container">
      <div className="image-container">
        <img
          className="background-image"
          src="https://res.cloudinary.com/hilnmyskv/image/upload/q_auto,f_auto/v1681989901/Algolia_com_Blog_assets/Featured_images/product/how-can-you-improve-your-content-management-system-cms-with-great-search/tlqljogcekpr9tf2ejxj.jpg"
          alt="Background"
        />
        <div className="content-overlay">
        <h1 id="o">CONTENT DISCOVERING APPLICATION</h1>
          <p>Welcome to our content discovery platform, where exploration meets delight. <br />
          Our mission is to curate a diverse universe of engaging content, personalized to your interests and preferences. <br />
          Whether you're seeking the latest articles, trending videos, or thought-provoking podcasts, our homepage is your gateway to a world of captivating discoveries.<br /> 
          Our intuitive search bar empowers you to find exactly what you're looking for, while our handpicked recommendations offer a journey of serendipitous exploration. <br />
          Join us on this exciting voyage of content discovery and let your interests lead the way.</p>
          <div className="button-container">
          <h1>For User </h1>
            <h1>
              <Link to="/AuthPage">Click Here!!!</Link>
            </h1>
            <h1>For Admin</h1>
            <h1>
              <Link to="/Alogin">Click Here!!!</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
