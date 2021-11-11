
import { Calendar, Component, createElement, DayHeaderContentArg } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

document.addEventListener('DOMContentLoaded', function() {
    let calendarEl: HTMLElement = document.getElementById('calendar')!;

  
    let calendar = new Calendar(calendarEl, {
      plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialDate: '2021-11-11',
      navLinks: true,
      editable: false,
      selectable: true,
      dayMaxEvents: true,
      
      events: [
        {
          title: 'Reserved',
          start: '2021-11-11',
          backgroundColor: 'red',
          allDay: true,
          editable: false,
          extendedProps: {
            department: 'BioChemistry'
          },
          description: 'Lecture'
        },
        {
          title: 'Hello its a long day?',
          start: '2021-11-07',
          end: '2021-11-10',
          editable: true,
          extendedProps: {
            department: 'BioChemistry'
          },
          description: 'Lecture'
        },        
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2021-11-28'
        }
      ],            
      eventClick: function(info) {      
        console.log(info.event, 'eventClick')
        
      }
    });

  calendar.render();
});