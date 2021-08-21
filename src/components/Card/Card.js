import React from "react";
import styles from "./Card.module.css";

const Card = ({ user }) => {
    return (
        <div className={styles.row}>
            <div className={styles.left}>
                <img
                    className={styles.img}
                    src={user.avatar_url}
                    alt="github avatar"
                />
            </div>
            <div className={styles.right}>
                <h3>{user.name}</h3>
                <p>{user.bio}</p>
                <p>{user.location}</p>
                <a href={user.html_url} target="_blank">
                    GitHub Account
                </a>
            </div>
        </div>
    );
};

export default Card;
