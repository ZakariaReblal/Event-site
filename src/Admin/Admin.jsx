import React from 'react';
import App from '../App';
import './Admin.css';
import Footer from '../Home/Footer/Footer';
import logo3 from './logo3.png';
import { Link } from 'react-router-dom';

 

const Admin = () => {
    return (
        <div>
 <div class="container-fluid">
    <div class="row">
      <nav class="col-md-3 col-lg-2 sidebar">
        <ul class="nav flex-column">
        <li class="logo_admin">
            <h1 className='text-center fw-bold'>ADMIN USER</h1>
            <div className="underline1"></div>
          </li>
          <li class="nav-item mt-5">
            <Link class="nav-link active" to="/">EVENTS</Link>
          </li>
          <li class="nav-item mt-3">
            <Link class="nav-link" to="/">FORMATIONS</Link>
          </li>
          <li class="nav-item mt-3">
            <Link class="nav-link" to="/">USERS</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
        </div>
    );
}

export default Admin;
