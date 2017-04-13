// Navbar is a stateless functional component since it used for presentation only.
// Stateless functional components are smaller, easier to test, and will soon offer improved performance from the React team by avoiding unnecessary checks and memory allocations (no state or lifecycle methods).

// Navbar will require a userObj prop and display its' info in Navbar

import React from 'react'

import styles from './UserNavbar.css';

const Navbar = ({userObj}) =>

        <div className={styles.userNavbarContainer}>
          <nav className={styles.userNavbar}>
          <ul className={styles.userNavbar__list}>
            <li className={styles.userNavbar__listitems}>Preact</li>
            <img className={styles.userNavbar__avatar} src={userObj.pic}/>
            <li className="userNavbar__listitems">
              {userObj.userName}({userObj.notifications})
            </li>
            <li className="userNavbar__listitems">Respond</li>
            <li className="userNavbar__listitems">@Mentions({userObj.mentions})</li>
            <li className="userNavbar__listitems userNavbar__right">Sign Out</li>
          </ul>
          </nav>
        </div>


Navbar.propTypes = {
  userObj: React.PropTypes.object.isRequired
}

export default Navbar;
