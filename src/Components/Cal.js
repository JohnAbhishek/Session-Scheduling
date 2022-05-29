import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin,{DateClickArg} from '@fullcalendar/interaction'

function Cal() {
  
  return (
    <div className='bg-white'>    <FullCalendar plugins={[dayGridPlugin,interactionPlugin]} 
    events={[{title:'10 AM', date: '2022-05-21'},{title:'10 AM', date: '2022-05-23'},{title:'11 AM', date: '2022-05-21'},{title:'10 AM', date: '2022-05-24'},{title:'10 AM', date: '2022-06-24'},{title:'10 AM', date: '2022-06-27'}]}
    >
        </FullCalendar>
    </div>

  )
}

export default Cal