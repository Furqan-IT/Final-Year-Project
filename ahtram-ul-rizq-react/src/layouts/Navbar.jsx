import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { removeAuthToken } from '../store/slices/authTokenSlice';
import { setAdminRole } from '../store/slices/adminRoleSlice';

const Navbar = () => {
    const authToken = useSelector((state) => state.authToken.authToken);
    const role = useSelector((state) => state.adminRole.roleValue)
    console.log(role);
    const dispatch = useDispatch()

    

    console.log(authToken)
    // if authToken hide the display of login, sign up button
    const handleLogout = () => {
        dispatch(removeAuthToken())
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Ahteram ul Rizq</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/donate-food">Donate Food</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/inventory">Inventory</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/Volunteerpage">Volunteer</Link>
                            </li>
                            {authToken && (<>
                            <li className='nav-item'>
                                <Link className='nav-link' to="./chatpage">Chat To Our Community</Link>
                            </li>
                            
                                <li className='nav-item'>
                                    <Link className='nav-link' to={`${role=="admin"? "/admin/dashboard" : role=="needyPerson"? "/needyPerson/dashboard" : "/volunteer/dashboard"}`}>Dashboard</Link>
                                </li>
                            </>)}
{/* For Public links */}

                        </ul>
                        <div className="d-flex" role="search">
                        {/* for not logged in */}
                            {!authToken ? (
                                <>
                                    <Link to={`/auth/admin-login`}>
                                        <button className="btn btn-warning mx-2" type="button">
                                            Admin Login
                                        </button>
                                    </Link>
                                    <Link to={`/auth/volunteer-login`}>
                                        <button className="btn btn-danger mx-2" type="button">
                                            Login as Volunteer
                                        </button>
                                    </Link>
                                    <Link to={`/auth/login`}>
                                        <button className="btn btn-primary mx-2" type="button">
                                            Login
                                        </button>
                                    </Link>
                                    <Link to={`/auth/register`}>
                                        <button className="btn btn-success mx-2" type="button">
                                            Sign Up
                                        </button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                {/* After logging in */}

                                    {/* logout */}
                                    <button onClick={handleLogout} className="btn btn-danger mx-2" type="button">
                                        Logout
                                    </button>
                                    {
                                        role !== "admin" && (<>
                                        {/* apply as volunteer */}
                                    <Link to={`/volunteer/apply`}>
                                        <button className="btn btn-info mx-2" type="button">
                                            Apply as Volunteer
                                        </button>
                                    </Link>
                                    {/* apply as needy person */}
                                    <Link to={`/needy/apply`}>
                                        <button className="btn btn-warning mx-2" type="button">
                                            Apply as Needy
                                        </button>
                                    </Link>
                                        </>)
                                    }
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar