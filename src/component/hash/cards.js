import React, { useState, useEffect } from 'react';
import './Cards.css';

const Cards = () => {
  const originalText = 'COLLABORATE  FEEDBACK';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(originalText.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === originalText.length) {
        currentIndex = 0; // Reset currentIndex to 0 when it reaches the end of the text
      }
    }, 550); // Change the interval duration to control the speed of the animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hashcards'>
      <div className='hashcard'>
        <img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1689249614744/2ee02e64-0bde-45bd-8805-c8150c9bd966.png?auto=format,compress' alt='right' className='hashcard-img' />
        <div className='hashcard-content'>
          <h2>Built-In Analytics.</h2>
          <p>Analyze your articles' performance over a period of time. Access powerful analytics to track the number of views and likes on your blog.</p>
        </div>
      </div>
      <div className='hashcard'>
        <img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1689249497215/ffaa8a44-1f69-4164-8624-0d578321f3f1.png?auto=format,compress' alt='left' className='hashcard-img' />
        <div className='hashcard-content'>
          <h2>Advanced user management.</h2>
          <p>Collaborate with your team members and publish under the same domain. Get access to advanced member management.</p>
        </div>
      </div>
      
      <div className='hashcard hashcard-third'>
        <div className='hashcard-content'>
          <h2>Native GitHub integration.</h2>
          <p>Publish and backup articles directly on a private or public GitHub repository, enabling you to always have control over your content.</p>
        </div>
        <img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1690204911902/7928e912-4de7-4bb0-9f05-3ea2b7965122.png?auto=format,compress' alt='right' className='hashcard-img' />
      </div>

      <div className='hashcard hashcard-fourth'>
        <div className='hashcard-content'>
          <h1>
            {displayedText}
            <br />
          </h1>
        </div>
        <div className='hashcard-info'>
          <h2>Advanced editing and writing collaboration.</h2>
          <p>Hashnode offers advanced collaboration features that you would expect from a team blog. It includes an approval process and feedback system to enhance drafts before they are published on the blog.</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
