import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { GameList } from "../components/game/GameList"
import { EventList } from "../components/event/EventList"
import { GameForm } from "../components/game/GameForm"
import { EventForm } from "../components/event/EventForm"
import { UpdateEventForm } from "../components/event/UpdateEventForm"
import { UpdateGameForm } from "../components/game/UpdateGameForm"
import { GameDetail } from "../components/game/GameDetail"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
            <Route path="/" element={<GameList />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/events/new" element={<EventForm />} />
            <Route path="/games/new" element={<GameForm />} />
            <Route path="/update-event/:eventId" element={<UpdateEventForm />} />
            <Route path="/games" element={<GameList />} />
            <Route path="/update-game/:gameId" element={<UpdateGameForm />} />
            <Route path="/games/:gameId" element={<GameDetail />} />
            </Route>
        </Routes>
    </>
}
