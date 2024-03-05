import { NavLink, Outlet } from "react-router-dom"


export default function Profile() {
    return (
        <div>
            <header>
                <h1>Your Profile</h1>
                <NavLink to="create">Create Project</NavLink>
                <NavLink to="">View Projects</NavLink>
            </header>
            <Outlet />
        </div>
    )
}