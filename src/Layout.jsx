import React from 'react';
import { Link } from 'react-router-dom';
import '../style/menu.css'
import logo from './assets/logo.png';
export default function Layout()
{
    return (
    <>
        <nav className ="topMenu">
            <Link to ="/">Home</Link>
            <Link to ="/About">About</Link>
            <Link to ="/Education">Education</Link>
            <Link to ="/Project">Project</Link>
            <Link to ="/Contract">Contract</Link>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
    </>
)}
