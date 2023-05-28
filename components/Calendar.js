import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import React, { useState, useEffect } from 'react'

const Calendar = (params) => {
  const city_id = params.city_id,
        [events, setEvents] = useState(null),
        [activeBound, setActiveBound] = useState({});
  
  useEffect(() => {
    if(activeBound.start && activeBound.end){
      fetch('/api/lluvias/' + city_id + '?start=' + activeBound.start + '&end=' + activeBound.end)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setEvents(data);
      })
    }
  }, [activeBound.start, activeBound.end])

  const datesRender = info => {
    setActiveBound({
      start: info.startStr,
      end: info.endStr
    })
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, bootstrap5Plugin]}
      initialView='dayGridMonth'
      themeSystem='bootstrap5'
      locale='es'
      timeZone='America/Argentina/Buenos_Aires'
      headerToolbar={{
        start: 'title',
        center: '',
        end: 'prev,next'
      }}
      titleFormat={{ 
        year: 'numeric', 
        month: 'long' 
      }}
      fixedWeekCount={false}
      height={'auto'}
      eventDisplay={false}
      displayEventTime={false}
      datesSet={datesRender}
      events={events}
    />
  )
}

export default Calendar