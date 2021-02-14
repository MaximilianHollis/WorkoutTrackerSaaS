import React, { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state'

const DateContext = React.createContext();

export const DateProvider = props => {
    const [date, setDate] = useState({day: '', month: '', dayOfWeek: '', firstSunInMonth: '', timeOfDay: '', exactTime: '', year: '' });

    useEffect(()=>{
        const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const prnDt = new Date().toLocaleTimeString('en-us', options);
        const [dayOfWeek, month, day, year, exactTime] = prnDt.replaceAll(',', '').split(' ');
        const hour = exactTime.split('').splice(0,2).join('');
        let timeOfDay = 'Evening';
        if(hour < 17)
            timeOfDay = 'Afternoon'
        if(hour < 12)
            timeOfDay = 'Morning'
        setDate({day: day, month: month, dayOfWeek: dayOfWeek, firstSunInMonth: '', timeOfDay: timeOfDay, exactTime: exactTime, year: year });
    },[]);

    

  /*   console.log(prnDt)
    const [ dayOfWeek, month, day, year, time ] = prnDt.split(' ')
    console.log(day)

    const dayIndex = daysOfWeek.findIndex(day => day + ',' == dayOfWeek);

    console.log(dayIndex)

 */

    return(
        <DateContext.Provider value={{
            date
        }}>
            {props.children}
        </DateContext.Provider>
    )
}

export default DateContext;