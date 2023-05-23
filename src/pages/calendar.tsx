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

moment.locale('en-us');

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
    <div className='calendar-home'>
      <h1 className='calendar-header'>Calendar</h1>
      <style jsx global>{`
        .rbc-calendar {
          height: 700px;
          background-color: #f9fafb;
          padding: 40px;
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
          background-color: #f2f2f2;
        }

        .calendar-header {
          text-align: center;
          font-family: 'Linotype Didot', serif;
          font-weight: bold;
          font-size: 30px;
          margin-top: 4rem;
          margin-bottom: 2rem;
        }
      `}</style>
      <div className='calendar'>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor={(event) => new Date(event.start)}
          endAccessor={(event) => new Date(event.end)}
          eventPropGetter={eventStyleGetter}
        />
      </div>
    </div>
  );
};

export default CalendarPage;
