import React from 'react';
import styles from '../styles/components/Image.module.css'
const Image = ({obj}) => {

    return (
        <div className={styles.image} key={obj._id} style={{backgroundImage: `url(http://localhost:8888${obj.imageUrl})`}} >
            <div className={styles.body}>
                <div className={styles.footer}>
                    <p className={styles.description}>{obj.description}</p>
                    <ion-icon name="chevron-up-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
};

export default Image;