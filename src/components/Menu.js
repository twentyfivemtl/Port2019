import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">About</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Skills</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Projects & Side Projects</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Training</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Experience</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Education</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
