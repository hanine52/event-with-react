import cuid from 'cuid';
import React, { useState } from 'react';
import { Button, Form, Segment, Header } from 'semantic-ui-react';

export default function EventForm({setFormOpen, setEvents, createEvent, selectedEvent, updateEvent}) {
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

/*   const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState(''); */
  function handleFormSubmit() {
    selectedEvent 
    ? updateEvent({...selectedEvent, ...values}) 
    : createEvent({...values, id: cuid(), hostedBy: 'Hanine', attendees: [], hostPhotoURL: '/assets/user.png'});
    setFormOpen(false);
  }
  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Update the Event' : 'Create new Event'} />
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
        <Button
          type="submit"
          floated="right"
          positive
          content="Submit"
        ></Button>
        <Button onClick={() => setFormOpen(false)} type="submit" negative floated="right" content="Cancel"></Button>
      </Form>
    </Segment>
  );
}
