import { NavLink, Outlet } from "react-router-dom"


export default function Profile() {
    return (
        <div>
            <header className="profileHeader">
                <h1 className="h1Profile">Your Profile</h1>
                <NavLink to="create" className="createProjectButton">Create Project</NavLink>
                <NavLink to="" className="projectView">View Projects</NavLink>
            </header>
            <Outlet />
        </div>
    )
}