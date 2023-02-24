import React from "react";
import styles from "../styles/components/Sidebar.module.css";


function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.body}>
                <ul className={styles.links}>
                    <li><ion-icon name="home-outline"></ion-icon></li>
                    <li><ion-icon name="add-outline"></ion-icon></li>
                    <li><ion-icon name="bookmark-outline"></ion-icon></li>
                    <li><ion-icon name="albums-outline"></ion-icon></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
