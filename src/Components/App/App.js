import React from 'react'
import './App.css'
import Router from '../Router/Router'
import Header from '../Header/header'

function App() {
   
    return (
        <div className='container' >
            <div className="header">
               <Header/>
            </div>
            <div className="App">
            <Router/>
            </div>
        </div>
    )
}

export default App;