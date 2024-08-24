import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { UserContext } from '../context/userContext';

const Header = () => {
    const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false);
    // const [searchQuery, setSearchQuery] = useState('');
    const { currentUser } = useContext(UserContext);

    const closeNavHandler = () => {
        if (window.innerWidth < 800) {
            setIsNavShowing(false);
        } else {
            setIsNavShowing(true);
        }
    }

    // const handleSearch = () => {
    //     // Implement your search functionality here
    //     console.log('Searching for:', searchQuery);
    //     // Example: Redirect to search results page
    //     // history.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    // }

    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className='nav__logo' onClick={closeNavHandler}>
                    {/* <img src={Logo} alt='logo'/> */}
                    <h3>MERN BLOG</h3>
                </Link>
                {/* Navigation toggle button */}
                <button className='nav__toggle-btn' onClick={() => setIsNavShowing(!isNavShowing)}>
                    {isNavShowing ? <AiOutlineClose /> : <FaBars />}
                </button>
                {/* Search Bar
                <div className="search__bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="search__btn" onClick={handleSearch}>
                        <FaSearch />
                    </button>
                </div> */}
                {/* Menu items */}
                {currentUser?.id && isNavShowing && (
                    <ul className='nav__menu'>
                        <li className='nav__item'><Link to={`/profile/${currentUser.id}`} onClick={closeNavHandler}>{currentUser?.name}</Link></li>
                        <li className='nav__item'><Link to='/create' onClick={closeNavHandler}>Create Post</Link></li>
                        <li className='nav__item'><Link to='/authors' onClick={closeNavHandler}>Authors</Link></li>
                        <li className='logout btn danger'><Link to='/logout' onClick={closeNavHandler}>Logout</Link></li>
                    </ul>
                )}
                {!currentUser?.id && isNavShowing && (
                    <ul className='nav__menu'>
                        <li className='nav__item'><Link to='/authors' onClick={closeNavHandler}>Authors</Link></li>
                        <li className='login__btn'><Link to='/login' onClick={closeNavHandler}>Login</Link></li>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Header;
