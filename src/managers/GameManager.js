export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createGame = (game) => {
    return fetch("http://localhost:8000/games", {
        method: "POST", // Set the request method to POST
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json" // Specify content type
        },
        body: JSON.stringify(game) // Send the game data in the request body
    })
    .then(response => response.json());
}

export const getGameTypes = () => {
    return fetch("http://localhost:8000/gametypes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json)
}

export const getGameById = (gameId) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch game details");
        }
        return response.json();
    });
}

export const updateGame = (gameId, gameData) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(gameData)
    })
    .then(response => {
        if (response.status === 204) {
            return; // No need to parse response, just return
        }
        if (!response.ok) {
            throw new Error("Failed to update game");
        }
        return response.json();
    });
}

export const deleteGame = (gameId) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(() => getGames()); // Fetch the updated games list after deletion
}