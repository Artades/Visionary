import React from 'react';
import styles from '../styles/pages/Settings.module.css'
import {useSelector} from "react-redux";
const Settings = () => {
    const userData = useSelector((state) => state.auth.data);
    const fullName = userData !== null ? userData.fullName : '. . . .';
    const email = userData !== null ? userData.email : '. . . .';
    const dateOfRegistration = userData !== null ? new Date(userData.createdAt).toLocaleString().slice(0,10) : '. . . .';
    console.log(fullName)
    return (
        <div className="container">
        <div className={styles.settings}>
            <div className={styles.body}>
                <main className={styles.main}>
                    <h2>User</h2>
                    <hr/>
                   <article className={styles.userBlock}>
                    <div className={styles.body}>

                           <p>Full Name: <span>{fullName}</span></p>

                           <p>Date of Registration: <strong>{dateOfRegistration}</strong></p>

                           <p>E-mail: <strong>{email}</strong></p>

                           <p>Password Status: <span>Strong Hash</span></p>
                    </div>
                    </article>
                    <h2>About App</h2>
                    <hr/>
                    <article className={styles.aboutBlock}>
<p></p>
                    </article>
                    <h2>Appearance</h2>
                    <hr/>
                    <article className={styles.appearanceBlock}>

                    </article>
                </main>
            </div>
        </div>
        </div>
    );
};

export default Settings;