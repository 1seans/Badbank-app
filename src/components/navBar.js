import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true);
      }else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <nav  className={scrolled ? 'scrolled': ''} bg="light" expand="lg">
    <div className="container-fluid">
      <div className='nav-menu'>
      <Link className={`navbar-brand ${activeLink === '/' && 'active'}`} onClick={() => setActiveLink('/')} to="/">Main</Link>
        <Link className={`navbar-brand ${activeLink === '/home' && 'active'}`} onClick={() => setActiveLink('/home')} to="/home">Home</Link>
        <Link className={`navbar-brand ${activeLink === '/deposit' && 'active'}`} onClick={() => setActiveLink('/deposit')} to="/deposit">Deposit</Link>
        <Link className={`navbar-brand ${activeLink === '/withdraw' && 'active'}`} onClick={() => setActiveLink('/withdraw')} to="/withdraw">Withdrawal</Link>
        <Link className={`navbar-brand ${activeLink === '/createaccount' && 'active'}`} onClick={() => setActiveLink('/createaccount')} to="/createaccount">Create Account</Link>
        <Link className={`navbar-brand ${activeLink === '/alldata' && 'active'}`} onClick={() => setActiveLink('/alldata')} to="/alldata">All Data</Link>
        </div>
    </div>
  </nav>
  );
}


export default Navbar;
