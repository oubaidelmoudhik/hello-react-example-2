import React, { useState, useEffect } from 'react';
import PeopleList from './PeopleList';
import AddPersonForm from './AddPersonForm';
function ContactManager(props) {
  const arr = ['Mohamed', 'Bilal', 'Ahmed'];
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    if (name !== '') {
      setContacts([...contacts, name]);
    }
  }
  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}

export default ContactManager;
