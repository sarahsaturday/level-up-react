import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../../managers/GameManager.js";

export const GameDetail = () => {
    const { gameId } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        getGameById(gameId)
            .then(data => setGame(data))
            .catch(error => console.error("Error fetching game:", error));
    }, [gameId]);

    if (!game) {
        return <div>Loading...</div>; // Add loading state
    }

    return (
        <article className="game-detail">
            <h2 className="game-detail__title">{game.title}</h2>
            <div className="game-detail__type">Type: {game.type}</div>
        </article>
    );
};
