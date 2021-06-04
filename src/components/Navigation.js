import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/">
                Accueil
            </NavLink>
            <NavLink exact to="/a-propos">
                À propos
            </NavLink>
            
        </div>
    );
};

export default Navigation;