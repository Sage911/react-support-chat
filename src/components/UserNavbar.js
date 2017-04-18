// Navbar is a stateless functional component since it used for presentation only.
// Stateless functional components are smaller, easier to test, and will soon offer improved performance from the React team by avoiding unnecessary checks and memory allocations (no state or lifecycle methods).

// Navbar will require a userObj prop and display its' info in Navbar

import React from 'react'

import styles from './UserNavbar.css';

const UserNavbar = (props) =>

        <div className={styles.userNavbarContainer}>
          <nav className={styles.userNavbar}>
          <ul className={styles.userNavbar__list}>
            <li className={styles.userNavbar__listitems}>Preact</li>
            <img className={styles.userNavbar__avatar} src={props.userObj.pic}/>
            <li className={styles.userNavbar__listitems}>
              {props.userObj.userName}({props.userObj.notifications})
            </li>
            <li className={styles.userNavbar__listitems}>Respond</li>
            <li className={styles.userNavbar__listitems}>@Mentions({props.userObj.mentions})</li>
            <li className={styles.userNavbar__listitems} onClick={props.onClick}>Sign Out</li>
          </ul>
          </nav>
        </div>


UserNavbar.propTypes = {
  // userObj: React.PropTypes.object.isRequired
}

export default UserNavbar;
