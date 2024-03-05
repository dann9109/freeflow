import './Header.css';
import { NavLink } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client'
import { AUTHENTICATE } from '../../utils/queries'
import { LOGOUT_USER } from '../../utils/mutations'

export default function Header() {

    const { data: userData } = useQuery(AUTHENTICATE)
    const [logoutUser] = useMutation(LOGOUT_USER, {
        refetchQueries: [AUTHENTICATE]
    })
    return (

        <header className="header">
            <div className="column">
            <nav className="a"></nav>
                <a href="/"><h1 className="h1">FreeLancers</h1></a>
                <nav className="a nav">
                    <div className="div">
                        <button><NavLink to="/login">Login</NavLink></button>
                        <button><NavLink to="/signup">Sign Up</NavLink></button>
                    </div>
                </nav>
                <p className="p1">Bring in the Calvary</p>
                <p className="p2">
                    Increase Results
                </p>
                <p className="p3">
                    &
                </p>
                <p className="p4">
                    Provide Transparency
                </p>
            </div>
        </header>

    )
}
