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
                <Link to ="/" className='btn btn-link'>Home</Link>
                <Link to ="/About" className='btn btn-link'>About me</Link>
                <Link to ="/Education" className='btn btn-link'>Education</Link>
                <Link to ="/Project" className='btn btn-link'>Project</Link>
                <Link to ="/Contract" className='btn btn-link'>Contract</Link>
            </section>
        </header>
    </>
)}
