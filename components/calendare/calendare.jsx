import React, { useState } from 'react';


const currentDate = new Date()+1;

export default function Calendar(date) {
   const
    currentDate = new Date(),
    [month, setMonth] = useState(currentDate.getMonth()+1), // Номер месяца
    [year, setYear] = useState(currentDate.getFullYear()), // Год 
    [day, setDay] = useState(currentDate.getDate()), // день
    [isTableVisible, setIsTableVisible] = useState(false), // Состояние для видимости таблицы
    toggleTableVisibility = () => {
        setIsTableVisible(!isTableVisible);
      };


    return (

        <>
      <div style={{ border: '1px solid black', padding: '4px', width: '120px' }}>
        {day}/{month}/{year} <button onClick={toggleTableVisibility}>📅</button>
      </div>
      {isTableVisible && <CalendarTable day={day} month={month} year={year} />}
    </>
        )
    }
     
    function CalendarTable({ day, month, year }) {
        return (
            <table>
            <tbody>
             Тут сделать таблицу календаря
             
            </tbody>
          </table>
        );
        
      }
        
      
      
    
