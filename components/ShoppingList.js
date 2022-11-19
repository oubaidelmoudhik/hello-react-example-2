import React from 'react';
import Item from './Item';

class ShoppingList extends React.Component {
  render() {
    return (
      <div class="list">
        <Item name="Baytat" price="45Dh" />
        <Item name="Atay" price="22Dh" />
        <Item name="Djaj" price="50Dh" />
      </div>
    );
  }
}

export default ShoppingList;
