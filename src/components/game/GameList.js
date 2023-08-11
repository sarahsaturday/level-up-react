import React, { useEffect, useState } from "react"
import { getGames } from "../../managers/GameManager.js"

export const GameList = (props) => {
    const [ games, setGames ] = useState([])

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title}</div>
                        <div className="game__type">{game.type}</div>
                        <div className="game__player">{game.gamer_id}</div>
                    </section>
                })
            }
        </article>
    )
}