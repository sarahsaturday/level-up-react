import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventById, updateEvent } from "../../managers/EventManager.js";

export const UpdateEventForm = () => {
    const { eventId } = useParams();
    const navigate = useNavigate();

    const [currentEvent, setCurrentEvent] = useState({
        location: "",
        date: "",
        organizer: "",
    });

    useEffect(() => {
        // Fetch the event details using eventId
        getEventById(eventId)
            .then(event => {
                setCurrentEvent(event);
            })
            .catch(error => {
                console.error("Error fetching event:", error);
            });
    }, [eventId]);

    const changeEventState = (domEvent) => {
        const { name, value } = domEvent.target;
        setCurrentEvent(prevEvent => ({
            ...prevEvent,
            [name]: value
        }));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const updatedEvent = {
            location: currentEvent.location,
            date: currentEvent.date,
            organizer: parseInt(currentEvent.organizer),
        };

        // Send PUT request to update event
        updateEvent(eventId, updatedEvent)
            .then(() => {
                navigate(`/events/${eventId}`); // Redirect to event's detail page
            })
            .catch(error => {
                console.error("Error updating event:", error);
            });
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">Update Event</h2>
            <fieldset>
                <div className="event-group">
                    <label htmlFor="organizer">Hosted by: </label>
                    <input
                        type="text"
                        name="organizer"
                        required
                        autoFocus
                        className="event-control"
                        value={currentEvent.organizer}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
    
            <fieldset>
                <div className="event-group">
                    <label htmlFor="location">Location: </label>
                    <input
                        type="text"
                        name="location"
                        required
                        className="event-control"
                        value={currentEvent.location}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
    
            <fieldset>
                <div className="event-group">
                    <label htmlFor="date">Date: </label>
                    <input
                        type="date"
                        name="date"
                        required
                        className="event-control"
                        value={currentEvent.date}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
    
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Update</button>
        </form>
    );

};