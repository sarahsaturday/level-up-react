import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getEvents, deleteEvent } from "../../managers/EventManager.js"

export const EventList = (props) => {
    const [ events, setEvents ] = useState([])
    const [deleted, setDeleted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getEvents().then(data => setEvents(data));
    }, [deleted]);

    const handleDelete = (eventId) => {
        deleteEvent(eventId)
            .then(() => {
                setDeleted(!deleted); // Toggle the deleted state
                navigate("/events"); // Navigate to the events list page after deletion
            })
            .catch(error => {
                console.error("Error deleting event:", error);
            });
    };

    return (
        <article className="events">
            <h2 className="eventForm__title">Events List</h2>
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="event">
                        <Link to={`/update-event/${event.id}`}>Update</Link>
                        <div className="event__location">Location: {event.location}</div>
                        <div className="event__date">Date: {event.date}</div>
                        <div className="event__organizer">Hosted by {event.organizer}</div>
                        <button onClick={() => deleteEvent(event.id)}>Delete</button>
                    </section>
                })
            }
        </article>
    )
}