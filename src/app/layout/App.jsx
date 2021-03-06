import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import Sandbox from '../../features/standbox/Sandbox';
import { useLocation } from 'react-router-dom';

function App() {
  const {key} = useLocation();
  return (
      <Fragment>
        <Route exact path='/' component={HomePage} /> 

        <Route exact path={'/(.+)'} render={() => (
          <Fragment>
            <NavBar />
            <Container className='main'>
                <Route exact path='/events' component={EventDashboard} />
                <Route exact path='/sandbox' component={Sandbox} />
                <Route path='/events/:id' component={EventDetailedPage} />
                <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key}/>
            </Container> 
          </Fragment> 
        )} />

      </Fragment>
  );
}

export default App;