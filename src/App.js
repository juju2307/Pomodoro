import {render} from 'react-dom'
import React from 'react'
import '../assets/App.css'
import Timer from './components/Timer.jsx'


render(
    <div className="Pomodoro">
            <Timer />  
    </div>,
    document.getElementById('app')
)

export default App;