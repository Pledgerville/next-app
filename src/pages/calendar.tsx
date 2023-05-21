import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/en-gb'; // Import the desired locale
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import the CSS file

const events = [
  {
    title: 'Yoga',
    start: new Date(),
    end: new Date(),
  },
  {
    title: 'Weekly Walk',
    start: new Date(),
    end: new Date(),
  },
  // Add more events as needed
];

// Set the locale for moment
moment.locale('en-gb');

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  return (
    <div>
      
      <h1>Calendar</h1>
      <style jsx global>{`
        /* Add your custom styles here */
        .rbc-calendar {
          background-color: #f2f2f2;
        }

        .rbc-event-content {
          color: #333;
        }

        .rbc-event {
          background-color: #ffa500;
        }

        .rbc-toolbar-label {
          font-size: 20px;
        }

        .rbc-selected {
          background-color: #ffcc00;
        }

        .rbc-header {
          color: #666;
        }
      `}</style>
      <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
    </div>
  );
};

export default CalendarPage;
