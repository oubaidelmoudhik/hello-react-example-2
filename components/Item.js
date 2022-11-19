import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Name',
    };
  }

  render() {
    return (
      <div className="item">
        <p>
          <b>{this.state.title}: </b> {this.props.name}
        </p>
        <p>
          <b>Price: </b>
          {this.props.price}
        </p>
      </div>
    );
  }
  // componentDidMount() {
  //   console.log('phase 4');
  //   this.setState({
  //     title: 'Tag',
  //   });
  // }
}

export default Item;
