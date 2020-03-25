import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css'
import { AuthContext } from '../../../context/auth-context';
import Auth from '../../../../user/pages/Auth/Auth';
import Button from '../../FormElements/Button/Button';

const NavLinks = (props) => {

    const auth = useContext(AuthContext);

    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>All users</NavLink>
        </li>
        {auth.isLoggedIn && (
            <li>
                <NavLink to="/u1/places">My places</NavLink>
            </li>)}
        {auth.isLoggedIn && (
            <li>
                <NavLink to="/places/new">Add place</NavLink>
            </li>)}
        {!auth.isLoggedIn && (
            <li>
                <NavLink to="/auth">Authenticate</NavLink>
            </li>)}
        {auth.isLoggedIn &&
            <button onClick={auth.logout}>
                Logout
            </button>}
    </ul>
}

export default NavLinks;