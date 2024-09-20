// import React from 'react';
// import styles from '../css/navigation.module.css'; // Import the CSS module

// function Navigation() {
//   return (
//     <div className={styles.navContainer}>
//       <ul className={styles.navList}>
//         <li>Home</li>
//         <li>Books</li>
//         <li>Members</li>
//         <li>Borrowings</li>
//         <li>Returns</li>
//         <li>Reports</li>
//         <li>Settings</li>
//         <li>Contact Us</li>
//         <li>FAQ</li>
//         <li>About Us</li>
//         <li>My Account</li>
//         <li>Recommendations</li>
//         <li>Book Reservations</li>
//       </ul>
//     </div>
//   );
// }

// export default Navigation;

import React from 'react';
import styles from '../css/navigation.module.css';
import { FaHome, FaBook, FaUsers, FaClipboardList, FaHistory, FaChartBar, FaCog, FaEnvelope, FaQuestionCircle, FaInfoCircle, FaUserCircle, FaStar, FaBookOpen } from "react-icons/fa";

function Navigation() {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        <li><FaHome /> Home</li>
        <li><FaBook /> Books</li>
        <li><FaUsers /> Members</li>
        <li><FaClipboardList /> Borrowings</li>
        <li><FaHistory /> Returns</li>
        <li><FaChartBar /> Reports</li>
        <li><FaCog /> Settings</li>
        <li><FaEnvelope /> Contact Us</li>
        <li><FaQuestionCircle /> FAQ</li>
        <li><FaInfoCircle /> About Us</li>
        <li><FaUserCircle /> My Account</li>
        <li><FaStar /> Recommendations</li>
      </ul>
    </div>
  );
}

export default Navigation;