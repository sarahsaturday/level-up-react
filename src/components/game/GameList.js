import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getGames, deleteGame } from "../../managers/GameManager.js"

export const GameList = (props) => {
    const [games, setGames] = useState([])
    const [deleted, setDeleted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getGames().then(data => setGames(data));
    }, [deleted]);

    const handleDelete = (gameId) => {
        deleteGame(gameId)
            .then(() => {
                setDeleted(!deleted); // Toggle the deleted state
                navigate("/games"); // Navigate to the games list page after deletion
            })
            .catch(error => {
                console.error("Error deleting game:", error);
            });
    };

    return (
        <article className="games">
            <h2 className="eventForm__title">Games List</h2>
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <Link to={`/update-game/${game.id}`}>Update</Link>
                        <div className="game__title">Title: {game.title}</div>
                        <div className="game__type">Type: {game.type}</div>
                        <div className="game__player">{game.gamer_id}</div>
                        <button onClick={() => handleDelete(game.id)}>Delete</button>
                    </section>
                })
            }
        </article>
    )
}