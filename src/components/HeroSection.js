import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import '../assets/HeroSection.css';
import SignIn from '../pages/SignIn';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function HeroSection() {
  const [showSignIn, setShowSignIn] = useState(false);
  const history = useHistory();

  const handleSignInClick = () => {
    setShowSignIn(true);
    history.push('/login');
  };

  const handleSignInClose = () => {
    setShowSignIn(false);
  };

  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Best Food Friends</h1>
      <p>Best Food Donation</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleSignInClick}
        >
          AUTHENFIFIER
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          GET STARTED <i className='far fa-play-circle' />
        </Button>
      </div>
      {showSignIn && <SignIn onClose={handleSignInClose} />}
    </div>
  );
}

export default HeroSection;
