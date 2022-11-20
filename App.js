import React from 'react';
// import ShoppingList from './components/ShoppingList';
import Counter from './components/Counter';
import Hooks from './components/Hooks';
import Converter from './components/Converter';
import Form from './components/Form';
import PeopleList from './components/PeopleList';
import AddPersonForm from './components/AddPersonForm';
import ContactManager from './components/ContactManager';

function App() {
  const contacts = ['Mohamed', 'Bilal', 'Ahmed'];
  return (
    <div className="App">
      {/* <Hooks /> */}
      {/* <Counter /> */}
      {/* <Converter /> */}
      {/* <Form /> */}
      {/* <AddPersonForm />
      <PeopleList data={arr} /> */}
      <ContactManager data={contacts} />
    </div>
  );
}

export default App;
