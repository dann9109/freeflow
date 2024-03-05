import { NavLink, Outlet } from "react-router-dom"


export default function Profile() {
    return (
        <div>
            <header className="profileHeader">
                <h1 className="h1Profile">Your Profile</h1>
                <NavLink to="create" className="createProjectButton">Create Project</NavLink>
                <NavLink to="" className="viewProjectsButton">View Projects</NavLink>
                <NavLink to="" className="viewProjectsButton"></NavLink>
                <NavLink to="" className="viewProjectsButton"></NavLink>
            </header>
            <Outlet />
        </div>
    )
}