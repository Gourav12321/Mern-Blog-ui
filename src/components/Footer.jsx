import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <ul className='footer__categories'>
            <li><Link to='/posts/categories/Agriculture'>Agriculture</Link></li>
            <li><Link to='/posts/categories/Business'>Business</Link></li>
            <li><Link to='/posts/categories/Education'>Education</Link></li>
            <li><Link to='/posts/categories/Arts'>Arts</Link></li>
            <li><Link to='/posts/categories/Weather'>Weather</Link></li>
            <li><Link to='/posts/categories/Entertainment'>Entertainment</Link></li>
            <li><Link to='/posts/categories/Investment'>Investment</Link></li>
        </ul>
        <div className="footer__copyright">
            <small>All Rights Reserved &copy; Copyright, Gourav Maurya</small>
        </div>
    </footer>
  )
}

export default Footer