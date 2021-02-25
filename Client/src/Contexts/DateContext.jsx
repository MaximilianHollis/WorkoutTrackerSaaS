import React, { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state'

const DateContext = React.createContext();

export const DateProvider = props => {
    const [date, setDate] = useState({ day: 0, month: 0, dayOfWeek: '', firstSunInMonth: '', timeOfDay: '', exactTime: '', year: 0, daysInMonth: 0 });

    useEffect(() => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const prnDt = new Date().toLocaleTimeString('en-us', options);

        try {
            //Cannot use- replaceAll not supported by all browsers
            //const [dayOfWeek, month, day, year, exactTime] = prnDt.replaceAll(',', '').split(' ');
            //refactored for better browser support replaceAll(',','') ==> split(',').join('')
            const [dayOfWeek, month, day, year, exactTime] = prnDt.split(',').join('').split(' ');
            const hour = exactTime.split('').splice(0, 2).join('');
            let timeOfDay = 'Evening';
            if (hour < 17)
                timeOfDay = 'Afternoon'
            if (hour < 12)
                timeOfDay = 'Morning'
            const daysInMonth = new Date((new Date).getFullYear(), (new Date).getMonth() + 1, 0).getDate();

            setDate({ day: day, month: month, dayOfWeek: dayOfWeek, firstSunInMonth: '', timeOfDay: timeOfDay, exactTime: exactTime, year: year, daysInMonth: daysInMonth });
            console.log('e')
        } catch{
            //need modal for users who cannot properly access data
            console.log('date could not be found')
        }
    }, []);



    /*   console.log(prnDt)
      const [ dayOfWeek, month, day, year, time ] = prnDt.split(' ')
      console.log(day)
  
      const dayIndex = daysOfWeek.findIndex(day => day + ',' == dayOfWeek);
  
      console.log(dayIndex)
  
   */

    return (
        <DateContext.Provider value={{
            date
        }}>
            {props.children}
        </DateContext.Provider>
    )
}

export default DateContext;