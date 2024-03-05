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
                <a href="/"><h1 className="h1">FreeLancers</h1></a>
                {userData?.authenticate ? (
                    <>
                        <nav className="a buttonOrder">
                            <p className="welcome">Welcome, {userData.authenticate.username}</p>
                            <div className="adiv">
                                <button><NavLink to="/profile" className="buttonsIn">Profile</NavLink></button>
                                <button onClick={logoutUser} className="buttonsIn">Log Out</button>
                            </div>
                        </nav>
                    </>
                ) : (
                    <>
                        <nav className="a">
                            <div className="adiv">
                                <NavLink to="/login" className="buttonsIn">Login</NavLink>
                                <NavLink to="/signup" className="buttonsIn">Sign Up</NavLink>
                                <NavLink to="/profile" className="buttonsIn">Profile</NavLink>
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
                    </>
                )}
            </div>
        </header>

    )
}
