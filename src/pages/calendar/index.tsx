/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventApi } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import { Header } from '../../components/header';
import { tokens } from '../../theme';

export const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleDateClick = (selected: any) => {
    // eslint-disable-next-line no-alert
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

  const handleEventClick = (selected: any) => {
    if (
      // eslint-disable-next-line no-alert
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  const parseDate = (value: any) => {
    const rawDate = Date.parse(value);

    return new Date(rawDate).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Box m={2}>
      <Header title="Calendar" subTitle="Full Calendar Interactive Page" />
      <Box display="flex" justifyContent="space-between">
        <Box
          mt={2}
          flex="1 1 20%"
          sx={{
            bgcolor: colors.primary[400],
            padding: '15px',
            borderRadius: '4px',
          }}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event: any) => (
              <ListItem
                key={event._def.publicId}
                sx={{
                  backgroundColor: colors.blueAccent[600],
                  margin: '10px 0',
                  borderRadius: '2px',
                }}
              >
                <ListItemText
                  primary={event._def.title}
                  secondary={
                    <Typography>
                      {parseDate(event._instance.range.start)}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

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
            weekends={false}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
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
    </Box>
  );
};
