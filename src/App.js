import React, { useState } from "react";
import Form from "./components/Form/Form";
import Container from "./components/Container/Container";
import Card from "./components/Card/Card";

import "./App.css";

function App() {
    const [cards, setCards] = useState([]);

    const handleUsers = (user) => {
        setCards((prevState) => {
            return [...prevState, user];
        });
    };

    return (
        <div className="App">
            <Form handleUsers={handleUsers} />
            <Container>
                {cards.length === 0 ? (
                    <p>No results found :(</p>
                ) : (
                    cards.map((card) => {
                        return (
                            <div key={card.id}>
                                <Card user={card} />
                            </div>
                        );
                    })
                )}
            </Container>
        </div>
    );
}

export default App;
