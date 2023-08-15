import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        navigate({ pathname: "/games/new" })
                    }}
                >Register New Game</button>
            </li>
            <li className="navbar__item">
            <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        navigate({ pathname: "/events/new" })
                    }}
                >Create New Event</button>
            </li>
            <li className="navbar__item">
            <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        navigate({ pathname: "/games" })
                    }}
                >Games List</button>
            </li>
            <li className="navbar__item">
            <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        navigate({ pathname: "/events" })
                    }}
                >Events List</button>
            </li>
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
