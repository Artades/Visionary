import React, {useEffect, useState} from 'react';
import styles from '../styles/pages/Home.module.css'
import {selectIsAuth} from "../redux/slices/auth";
import Header from "../components/Header";
import {TypingGreeting} from "../components/TypingGreeting";
import Sidebar from "../components/Sidebar";
import Images from "../components/Images";
import {useSelector} from "react-redux";
import Overlay from "../components/Overlay";


const Home = () => {
    //Greeting rendering
    const [greeting, setGreeting] = useState('');
    //Data rendering
    const data = useSelector((state) => state.auth.status === 'loaded' ? state.auth.data : 'not loaded');
    const {posts} = useSelector((state) => state.posts);
    const arePostsLoading = posts.status === 'loading';
    // Realising sunset and sunrise time in user's location and showing relevant Greeting
    const now = new Date();
    const currentTime = now.getTime();
    const sunriseTime = new Date();
    sunriseTime.setHours(6);
    sunriseTime.setMinutes(0);
    sunriseTime.setSeconds(0);
    const sunsetTime = new Date();
    sunsetTime.setHours(18);
    sunsetTime.setMinutes(0);
    sunsetTime.setSeconds(0);
    const isSunrise = currentTime >= sunriseTime.getTime() && currentTime < sunsetTime.getTime() - 30 * 60 * 1000;
    const isSunset = currentTime >= sunsetTime.getTime() - 30 * 60 * 1000 && currentTime < sunriseTime.getTime() + 12 * 60 * 60 * 1000;
    useEffect(() => {
        if (isSunrise) {
            setGreeting("What's up, ");
        } else {
            setGreeting("Good evening, ");
        }
    }, [isSunrise, isSunset]);

//Toggling icon name
    const [iconName, setIconName] = useState('book-outline');
    let [isBookHovered, setIsBookHovered] = useState(false);
//Checking if user's authenticated
    const isAuth = useSelector(selectIsAuth);
    //Burger menu open property toggling
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="container">
                <Header/>
                <div className={styles.home}>
                    <div className={styles.body}>
                        {isAuth ? (
                            <>
                                <div className={styles.bar}>
                                    <h2 className={styles.title}>{greeting} <TypingGreeting fullName={data.fullName}/>
                                    </h2>
                                    <ion-icon name="reorder-three-outline"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    />
                                </div>
                                <br/>
                                <main className={styles.main}>
                                   <div className={styles.mainBody}>
                                       <Images
                                           arePostsLoading={arePostsLoading}
                                           posts={posts}
                                       />
                                   </div>
                                </main>
                                <Overlay isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                            </>


                        ) : (
                            <h2 style={{color: '#c50808'}}>
                                You are not authenticated
                            </h2>
                        )}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;

