import React from "react";
import { NavLink } from "react-router-dom";
import "./UserNavigation.scss";

import { userRoutes } from "../../../data/routes/userRoutes";

function UserNavigation(props) {
  return (
    <header className="UserNavigation">
      <div className="UserNavigation__inner">
        <nav className="UserNavigation__nav">
          <ul className="UserNavigation__list">
            {userRoutes.map((route) => {
              return (
                <li className="UserNavigation__item">
                  <NavLink
                    to={route.path}
                    className="UserNavigation__link"
                    activeClassName="UserNavigation__link--active">
                    {route.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default UserNavigation;
