import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
    return (
        <div className="header">
            <div className="navbar-container">
                <Link className="navbar-logo" to="/">
                    To-Do-App
                </Link>
                <div className="nav-menu">
                    <Link className="nav-links" to="/notes">
                        Notes
                    </Link>
                    <Link className="nav-links" to="/todo">
                        Todos
                    </Link>
                    <Link className="nav-links" to="/reminder">
                        Reminders
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default NavBar;
