import React, { useEffect, useState } from "react"
import { getEvents } from "../../managers/EventManager.js"

export const EventList = (props) => {
    const [ events, setEvents ] = useState([])

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    return (
        <article className="events">
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="event">
                        <div className="event__location">{event.location}</div>
                        <div className="event__date">{event.date}</div>
                        <div className="event__organizer">Hosted by {event.organizer}</div>
                    </section>
                })
            }
        </article>
    )
}