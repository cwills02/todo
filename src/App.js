import React from 'react';
import Header from './Header/Header';
import Auxillary from './components/Auxillary';
import SecondList from './components/SecondList';
import ThirdList from './components/ThirdList';

class App extends React.Component {
  state = {
    inputValue: '',
    items: [],
    otherItems: [],
    otherInputValue: ''
  };

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  otherOnInputChange(e) {
    this.setState({
      otherInputValue: e.target.value,
    });
  }

  addItem() {
    let newItems = this.state.items;
    newItems.push(this.state.inputValue);
    this.setState({
      newItems
    });
  }

  otherAddItem() {
    let newOtherItems = this.state.otherItems;
    newOtherItems.push(this.state.otherInputValue);
    this.setState({
      newOtherItems
    });
  }

  removeItemHandler(index) {
    let items = this.state.items;
    items.splice(index, 1);
    this.setState({ items });
  }

  removeOtherItem(index) {
    let otherItems = this.state.otherItems;
    otherItems.splice(index, 1);
    this.setState({ otherItems });
  }

  listItems() {
    let items = this.state.items;
    return (
      <ul>
        {
          items.map((val, index) => {
            return (
              <li key={index}>
                { val }
                <button onClick={() => this.removeItemHandler(index)}>Remove Item</button>
              </li>
            );
          })
        }
      </ul>
    );
  }

  newListItems() {
    let otherItems = this.state.otherItems;
    return (
      <ul>
        {
          otherItems.map((va, index) => {
            return (
              <li key={index}>
                { va }
                <button onClick={() => this.removeOtherItem(index)}>X</button>
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <Auxillary>
        <Header />
        <input type="text" 
        onChange={(e) => this.onInputChange(e)} 
        />
        <button onClick={() => this.addItem()}>Add item</button>
        {this.listItems()}
        <SecondList 
          details={this.state.items.length}
        />
        <ThirdList 
          otherInput={this.state.otherInputValue}
          onChange={(e) => this.otherOnInputChange(e)}
          onClick={() => this.otherAddItem()}
          otherTask={this.newListItems()}
        />
      </Auxillary>
    );
  }
}

export default App;