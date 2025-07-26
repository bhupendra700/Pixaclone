import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../CSS/Page1/footer.css'

const Footer = () => {
    return <footer className='footer'>
        <h2>
            <Link className='link' to={'/'}>Pixaclone</Link>
        </h2>
        <div className="social">
            <NavLink className={"icon insta"} to={'/facebook.com'} target='_blank'>
                <i className="ri-instagram-fill"></i>
            </NavLink>
            <NavLink className={"icon pinterest"} to={'/facebook.com'} target='_blank'>
                <i className="ri-pinterest-fill"></i>
            </NavLink>
            <NavLink className={"icon twitter"} to={'/facebook.com'} target='_blank'>
                <i className="ri-twitter-x-fill"></i>
            </NavLink>
            <NavLink className={"icon fb"} to={'/facebook.com'} target='_blank'>
                <i className="ri-facebook-fill"></i>
            </NavLink>
        </div>
        <p>© 2025 Pixaclone. Built for educational use only.</p>
    </footer>
}

export default Footer