import React, { useState } from 'react'
import "../../assets/App.css"

export default function Modal() {

    const [modal, setModal] = useState(false)

    function closemodal() {
       
    }

    function newtimer(){
       

    }

    return (
        <div className="modal">
            <p className="textmodal">Take a break my friend!</p>
            <button className="buttonmodal" onClick={this.closemodal}>CLOSE</button>
            <button className="buttonmodal" onClick={this.newtimer}>NEW TIMER</button>
        </div>
    )
}
