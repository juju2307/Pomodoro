import React, {useState, useEffect} from 'react';
import Modal from "../components/Modal"


export default function Timer() {

    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [start, setStart] = useState(false)


    useEffect(() => {
        let interval 
        if (start) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59)
                        setMinutes(minutes - 1)
                      
                } else {
                    const minutes = 0 
                    const seconds = 59

                    setSeconds(seconds)
                    setMinutes(minutes)
                    setStart(false)
                } 
                } else {
                    setSeconds(seconds - 1)
                }

            },1000)
        }

          return () => {clearInterval(interval)}
         
        }, [start, seconds])
        

        function startStop () {
        
            if (start) {
                setStart(false)
            } else {
                setStart(true)
            }
        }

        function buttonStart(){

            if (start) {
                return 'STOP'
            } else {
                return 'START'
            }
        }

        function addMinutes(){
            if (minutes >= 60) {
                setMinutes(60)
            } else {
                setMinutes(minutes +1)
            }
        }

        function lessMinutes(){
            if (minutes <= 0) {
                setMinutes(0)
            } else {
                setMinutes(minutes - 1)
            }
        }

        function resetTimer(){
            setMinutes(25)
            setSeconds(0)
        }

        function modal(){

            if (minutes === 0 && seconds === 0)

            return (<Modal />)
        
        }

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds


    return (
            <div className="container">
                <div className="chrono">
                   {timerMinutes}:{timerSeconds}
                </div>  
                <div className="menu">
                   <button className="button" onClick={startStop}>{buttonStart()}</button>
                   <button className="button" onClick={addMinutes}>+</button>
                   <button className="button" onClick={lessMinutes}>-</button>
                   <button className="button" onClick={resetTimer}>RESET</button>
                </div>
                <div className="modal">{modal()}</div>
            </div>
           
    )
}

