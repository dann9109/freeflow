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
                <h1 className="h1">FreeLancers</h1>
                {userData?.authenticate ? (
                    <>
                        <nav className="a">
                            <div className="adiv">
                                <p>Welcome, {userData.authenticate.username}</p>
                                <button><NavLink to="/profile">Profile</NavLink></button>
                                <button onClick={logoutUser}>Log Out</button>
                            </div>
                        </nav>
                    </>
                ) : (
                    <>
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
                    </>
                )}
            </div>
        </header>

    )
}
