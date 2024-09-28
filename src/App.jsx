/*the App.jsx, Luis Eduardo Orjuela Rojas, 301474380, 28/09/2024*/
import { useState } from 'react'
import './App.css'
import MainRouter from "./MainRouter"
import {BrowserRouter as Router} from "react-router-dom"

function App() {
      return (<><Router>
        <MainRouter/>
      </Router>
      
      </>)
}

export default App
