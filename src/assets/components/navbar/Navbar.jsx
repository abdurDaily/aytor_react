import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import routes from '../Routes/Routes';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg py-2">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img style={{height:'40px'}} className='img-fluid' src="public/images/logo/amazon.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                            routes.map((route,index)=>{
                                return (
                                    <li key={index} className="nav-item">
                                        <NavLink className='nav-link' to={route.path}>{ route.title }</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    </div>
                </div>
            </nav>  
        </div>
    );
};

export default Navbar;