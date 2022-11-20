import React, { useState, useEffect } from 'react';
function AddPersonForm(props) {
  const [person, setPerson] = useState('');

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson('');
    e.preventDefault();
  }
  return (
    <div>
      <h1>Contact Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new contact"
          onChange={handleChange}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
export default AddPersonForm;
