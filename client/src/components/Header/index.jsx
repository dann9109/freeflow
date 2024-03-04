import './Header.css';

export default function Header() {
    return (

        <header className="header">
            <div className="column">
                <h1 className="h1">FreeLancers</h1>
                <nav className="a">
                    <div className="adiv">
                    <button><a href="/login"></a></button>
                    <button><a href="/signup"></a></button>
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
