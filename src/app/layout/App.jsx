import React, { Fragment, useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectEvent, setSelectEvent] = useState(null);

  function handleCreateEvent() {
    setSelectEvent(null);
    setFormOpen(true);
  }

  function handleSelectedEvent(event) {
    setSelectEvent(event);
    setFormOpen(true);
  }


  return (
      <Fragment>
        <NavBar setFormOpen={handleCreateEvent} />
        <Container className='main'>
          <EventDashboard 
            formOpen={formOpen} 
            setFormOpen={setFormOpen} 
            selectEvent={handleSelectedEvent}
            selectedEvent={selectEvent}/>
        </Container>
      </Fragment>
  );
}

export default App;