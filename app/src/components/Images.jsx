import React, {useEffect} from 'react';
import styles from "../styles/pages/Home.module.css";
import SkeletonImage from "./SkeletonImage";
import Image from "./Image";
import {fetchPosts} from "../redux/slices/posts";
import {useDispatch} from "react-redux";

const Images = ({posts, arePostsLoading}) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className={styles.images}>
            <div className={styles.body}>
                {
                    (arePostsLoading ? [...Array(posts.length) + 1] : posts.items).map((obj, index) =>
                        arePostsLoading ?
                            (<SkeletonImage />) :
                            (<Image obj={obj} key={index}/>)
                    )
                }
            </div>
        </div>
    );
};

export default Images;