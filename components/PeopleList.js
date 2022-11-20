import React, { useState, useEffect } from 'react';
function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((element, index) => <li key={index}>{element}</li>);

  return <ul>{listItems}</ul>;
}
export default PeopleList;
