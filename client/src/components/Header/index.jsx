import './Header.css';
import{NavLink}from"react-router-dom";

export default function Header() {
    return (

        <header className="header">
            <div className="column">
                <h1 className="h1">FreeLancers</h1>
                <nav className="a">
                    <div className="adiv">
                        <button><NavLink to="/login">Login</NavLink></button>
                        <button><NavLink to="/signup">Sign Up</NavLink></button>
                    </div>
                </nav>
                <p className="p1">Bring in the Calvary</p>
                <p className="p2">
                    Increase Results
                </p>
                <p className="p2">
                    Provide Transparency
                </p>
            </div>
        </header>

    )
}
