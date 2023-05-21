import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/en-gb';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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

moment.locale('en-gb');

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const eventStyleGetter = () => {
    const style = {
      backgroundColor: '#ffa500',
      color: '#333',
      borderRadius: '0px',
      border: 'none',
    };
    return {
      style,
    };
  };

  return (
    <div>
      <h1>Calendar</h1>
      <style jsx global>{`
        /* Add your custom styles here */
        .rbc-calendar {
          height: 500px;
          background-color: #f2f2f2;
        }

        .rbc-month-view {
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
          width: 100%;
        }

        .rbc-month-row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
        }

        .rbc-day-slot {
          flex: 1;
          min-width: 0;
        }

        .rbc-row-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          border-right: 1px solid #ddd;
        }

        .rbc-date-cell {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 80px;
          border-bottom: 1px solid #ddd;
        }

        .rbc-off-range-bg {
          background-color: #000000;
        }
      `}</style>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor={(event) => new Date(event.start)}
        endAccessor={(event) => new Date(event.end)}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};

export default CalendarPage;
