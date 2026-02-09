import { useState } from 'react';
import HOME from '../assets/HOME.webp'
import { Link } from 'react-router-dom';
import  './Header.css';

export function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return(
       <header className='header'>
        <div className='Header-container'>
            <div className='header-logo'>
                <Link to='/Home' onClick={closeMenu}>
                    <img src={HOME} alt="coffee" className='logo-image' />
                </Link>
            </div>
            
            <nav className={`infoHref ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
                <Link className='hrefInfo' to='/Home' onClick={closeMenu}>Главная</Link>
                <Link className='hrefInfo' to='/CatalogPage' onClick={closeMenu}>Каталог</Link>
                <Link className='hrefInfo' to='/About' onClick={closeMenu}>О нас</Link>
                <Link className='hrefInfo' to='/contacts' onClick={closeMenu}>Контакты</Link>
            </nav>

            <button 
                className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Меню"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        
        {isMenuOpen && (
            <div className="mobile-overlay" onClick={closeMenu}></div>
        )}
       </header>
    )
}
export default Header