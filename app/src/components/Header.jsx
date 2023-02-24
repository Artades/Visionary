import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectIsAuth} from "../redux/slices/auth";
import styles from "../styles/components/Header.module.css"




const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);

    const onClickLogout = () => {
        if(window.confirm('Are you sure you want to log out ??')) {
            dispatch(logout());
            window.localStorage.removeItem('token' )

        }

    };
    return (
        <div className={styles.header}>
            <div className={styles.body}>

                <div className={styles.logo}>
                    <p>Visi<span><ion-icon name="aperture-outline"/></span>nary</p>
                </div>
                <div className={styles.buttons}>
                    {isAuth ? (
                        <>
                            <Link  to="/settings">
                                <ion-icon name="settings-outline"></ion-icon>
                            </Link>



                            <ion-icon  onClick={onClickLogout} name="log-out-outline"/>
                        </>
                    ) : (
                        <>
                            <Link to="/">
                                <ion-icon name="enter-outline"/>
                            </Link>
                            <Link to="/register">
                                <ion-icon name="person-outline"/>
                            </Link>
                        </>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Header