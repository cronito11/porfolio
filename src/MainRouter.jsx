import React from 'react'
import {Route, Routes} from "react-router-dom"
import About from "../component/About"
import Contact from "../component/Contact"
import Education from "../component/Education"
import Home from "../component/Home"
import Project from "../component/Project"
import Layout from "./Layout"

const MainRouter = () => 
{
    return (
        <div>
            <Layout/>
            <Routes>
                <Route exact path="/" element = {<Home/>}/>
                <Route exact path="/about" element = {<About/>}/>
                <Route exact path="/Education" element = {<Education/>}/>
                <Route exact path="/Project" element = {<Project/>}/>
                <Route exact path="/Contact" element = {<Contact/>}/>
            </Routes>
        </div>
    )
}

export default MainRouter