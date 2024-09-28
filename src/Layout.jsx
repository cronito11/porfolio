/*the Layout.jsx, Luis Eduardo Orjuela Rojas, 301474380, 28/09/2024*/
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/menu.css'
import logo from './assets/logo.png';
import "spectre.css"
export default function Layout()
{
    return (
    <>   
        <header class="navbar">
            <section class="navbar-left">
                <img src={logo} className="App-logo" alt="logo" />
            </section>
            <section class="navbar-section">
               <h2> <Link to ="/" className='btn btn-link'>Home</Link> </h2>
                 <h2><Link to ="/About" className='btn btn-link'>About me</Link></h2>
                 <h2><Link to ="/Services" className='btn btn-link'>Services</Link></h2>
                 <h2><Link to ="/Project" className='btn btn-link'>Projects</Link></h2>
                 <h2><Link to ="/Contact" className='btn btn-link'>Contact</Link></h2>
            </section>
        </header>
    </>
)}
