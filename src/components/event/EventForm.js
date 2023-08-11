import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createEvent, getEventTypes } from '../../managers/EventManager.js'


export const EventForm = () => {
    const navigate = useNavigate()
    const [event, setEvents] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentEvent, setCurrentEvent] = useState({
        location: "",
        date: "2023-09-01",
        organizer: 0
    })

    useEffect(() => {
        // TODO: Get the game types, then set the state
    }, [])

    const changeEventState = (domEvent) => {
        // TODO: Complete the onChange function
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">Create New Event</h2>
            <fieldset>
                <div className="event-group">
                    <label htmlFor="location">Location: </label>
                    <input type="text" name="location" required autoFocus className="event-control"
                        value={currentEvent.location}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="event-group">
                    <label htmlFor="date">Date: </label>
                    <input type="text" name="date" required autoFocus className="event-control"
                        value={currentEvent.date}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="event-group">
                    <label htmlFor="organizer">Hosted by: </label>
                    <input type="text" name="organizer" required autoFocus className="event-control"
                        value={currentEvent.organizer}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const event = {
                        location: currentEvent.location,
                        date: currentEvent.date,
                        organizer: parseInt(currentEvent.organizer),
                    }

                    // Send POST request to your API
                    createEvent(event)
                        .then(() => navigate("/events"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}