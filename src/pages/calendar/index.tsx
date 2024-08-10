import { Box, useTheme } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { Header } from '../../components/header';
import { tokens } from '../../theme';
import { useState } from 'react';

export const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected: any) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m={2}>
      <Header title="Calendar" subTitle="Full Calendar Interactive Page" />
      <Box flex="1 1 100%" ml="15px">
        <FullCalendar
          height="75vh"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          initialView="dayGridMonth"
          editable
          selectable
          selectMirror
          dayMaxEvents
          initialEvents={[
            {
              id: '12315',
              title: 'All-day event',
              date: '2024-08-14',
            },
            {
              id: '5123',
              title: 'Timed event',
              date: '2025-08-28',
            },
          ]}
        />
      </Box>
    </Box>
  );
};
