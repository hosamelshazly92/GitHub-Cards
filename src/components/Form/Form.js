import React, { useState } from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import styles from "./Form.module.css";

const Form = ({ handleUsers }) => {
    const [username, setUsername] = useState("");

    const handleUsername = (evt) => {
        setUsername(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then((user) => {
                console.log(user);
                handleUsers(user);
            });

        setUsername("");
    };

    return (
        <Container>
            <h1>GitHub Cards</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <input
                        className={styles.field}
                        type="text"
                        placeholder="Enter GitHub username...."
                        onChange={handleUsername}
                        value={username}
                        autoFocus
                    />

                    <Button>Add User</Button>
                </div>
            </form>
        </Container>
    );
};

export default Form;
