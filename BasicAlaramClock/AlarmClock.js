// Basic Alram Clock in JavaScript.

const prompt = require('prompt-sync')();

function AlarmClock(Hours,Minutes){

    Hours = parseInt(Hours);
    Minutes = parseInt(Minutes);

    let Dates = new Date();
    let setTime = new Date();

    setTime.setHours(Hours);
    setTime.setMinutes(Minutes);
    setTime.setSeconds(0);

    if (setTime.getTime() < Dates.getTime()) {
        setTime.setDate(setTime.getDate() + 1); 
    }

    let ClockForRing = setTime.getTime() - Dates.getTime();

    console.log(`Alarm set for ${setTime.toLocaleTimeString()}`);
    
    setTimeout(() => {
        setInterval(()=>{
            console.log("⏰ Wake Up! It's Time! ⏰"),3000
        })
        
    }, ClockForRing);
    
};

const GiveHours = prompt("Please Enter the Hours For Alram :")
const GiveMinutes = prompt("Please Enter the Minutes For Alram :")

AlarmClock(GiveHours,GiveMinutes);
