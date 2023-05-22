import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
// import '../assets/Navbar.css';

function AssociationNav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            BFF 
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Acceuil
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links'  onClick={closeMobileMenu}>
                Notifications
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu} >
                A propos
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/announcements' className='nav-links' onClick={closeMobileMenu}>
                Mes annonces
              </Link>
            </li>
            {button && (
              <li className='nav-item'>
                <Button buttonStyle='btn--outline'><Link to='/signin'>Déconnecter </Link></Button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default AssociationNav
//// barre de navigation d'une association