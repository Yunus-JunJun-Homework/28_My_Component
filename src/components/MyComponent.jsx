import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      Value: 0,
    };
  }

  changeState = (val) => () => {
    let { Value, List } = this.state;

    if (val === 'increaseAddOne') {
      this.setState({
        Value: ++Value,
        List: [Value, ...List],
      });
    }

    if (val === 'decreaseAddOne') {
      this.setState({
        Value: --Value,
        List: [Value, ...List],
      });
    }
  };

  addIncrease = this.changeState('increaseAddOne');
  addDecrease = this.changeState('decreaseAddOne');

  removeItem = (earlyIndex) => (e) => {
    e.preventDefault();

    const { List } = this.state;
    const newList = List.filter(
      (item, newIndex) => newIndex !== earlyIndex
    );

    let newValue;
    if (newList.length > 0) {
      newValue = newList[0];
    } else {
      newValue = 0;
    }
    this.setState({ List: newList, Value: newValue });
  };

  renderItem = (Value, index) => {
    return (
      <button
        type="button"
        className="list-group-item list-group-item-action"
        key={index}
        onClick={this.removeItem(index)}
      >
        {Value}
      </button>
    );
  };

  render() {
    const { List } = this.state;

    if (List.length > 0) {
      return (
        <div>
          <div style={{marginTop:40}}  className="btn-group font-monospace" role="group">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={this.addIncrease}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={this.addDecrease}
            >
              -
            </button>
          </div>
          <div className="list-group">
            {List.map((item, index) => this.renderItem(item, index))}
          </div>
        </div>
      );
    }

    return (
      <div>
        <div style={{marginTop:40}} className="btn-group font-monospace" role="group">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.addIncrease}

          >
            +
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={this.addDecrease}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default MyComponent;
