import cuid from 'cuid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Segment, Header } from 'semantic-ui-react';
import { useDispatch, useSelector } from "react-redux";
import { updateEvent, createEvent } from '../eventActions';


export default function EventForm({match, history}) {
  const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));
  const dispatch = useDispatch();


  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: ''
  }

  const [values, setValues] = useState(initialValues);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({...values, [name]: value})
  }
  
  function handleFormSubmit() {
    selectedEvent 
    ? dispatch(updateEvent({...selectedEvent, ...values})) 
    : dispatch(createEvent({...values, id: cuid(), hostedBy: 'Hanine', attendees: [], hostPhotoURL: '/assets/user.png'}));
    history.push('/events');
  }
  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the Event' : 'Create new Event'} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input type="text" placeholder="Event title" name='title' value={values.title} onChange={(e) => handleInputChange(e)}/>
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Category" name='category' value={values.category} onChange={(e) => handleInputChange(e)}/>
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Description" name='description' value={values.description} onChange={(e) => handleInputChange(e)}/>
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="City" name='city'  value={values.city} onChange={(e) => handleInputChange(e)}/>
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Venue" name='venue' value={values.venue} onChange={(e) => handleInputChange(e)}/>
        </Form.Field>
        <Form.Field>
          <input type="date" placeholder="Date" />
        </Form.Field>
        <Button floated="right" positive content="Submit"></Button>
        <Button as={Link} to='events' type="submit" negative floated="right" content="Cancel"></Button>
      </Form>
    </Segment>
  );
}
