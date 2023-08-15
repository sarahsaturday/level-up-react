export const getEvents = () => {
    return fetch("http://localhost:8000/events", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createEvent = (event) => {
    return fetch("http://localhost:8000/events", {
        method: "POST", // Set the request method to POST
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json" // Specify content type
        },
        body: JSON.stringify(event) // Send the event data in the request body
    })
        .then(response => response.json());
}

export const getEventById = (eventId) => {
    return fetch(`http://localhost:8000/events/${eventId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch event details");
            }
            return response.json();
        });
}

export const updateEvent = (eventId, eventData) => {
    return fetch(`http://localhost:8000/events/${eventId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(eventData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to update event");
            }
            return response.json();
        });
}

export const deleteEvent = (eventId) => {
    return fetch(`http://localhost:8000/events/${eventId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })

        .then(() => getEvents());
}