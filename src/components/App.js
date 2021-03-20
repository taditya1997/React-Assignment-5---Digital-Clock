import React, {Component, useState,useEffect} from "react";
import '../styles/App.css';

function App()
{
    const[time,setTime]=useState('');
    const[am,setampm]=useState('PM');

    const timer= ()=>
    {
        var clock= new Date();
        var hours=clock.getHours();
        var minutes=clock.getMinutes();
        var seconds=clock.getSeconds();
        hours<12?setampm("AM"):setampm("PM");
        if(hours==0)
        {
            hour=12;
            setampm('AM');
        }
        if(hours>12)
        {
            hours=hours%12;
            setampm("PM");
        }
        setTime(hours+":"+minutes+":"+seconds+" "+am); 
        
    }
    useEffect(()=>{setInterval(timer,1000)},[])

    const digitalClock=()=>
    {
        return(
            <div className="Clock"><h3>{time}</h3></div>
        )
            
    }
return(
    <>
    {digitalClock()}
    </>)
}
export default App;
