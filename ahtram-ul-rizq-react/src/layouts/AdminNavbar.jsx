import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { removeAuthToken } from '../store/slices/authTokenSlice';

const AdminNavbar = () => {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/admin/dashboard">Admin Dashboard</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/admin/volunteers">Volunteers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/needy-persons">Needy Persons</Link>
                            </li>
                            {/* donated foods */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/donated-foods">Donated Foods</Link>
                            </li>

                        </ul>
                        
                    </div>
                </div>
            </nav>

        </>
    )
}

export default AdminNavbar