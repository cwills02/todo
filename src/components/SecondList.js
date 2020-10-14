import React from 'react';
import Auxillary from './Auxillary';

class secondList extends React.Component {

  state = {
      tasks: [],
      inputValue: ''
  }

  onInputChange (e) {
    this.setState ({
        inputValue: e.target.value
    });
  }

  addItemHandler() {
    let newTasks = this.state.tasks;
    newTasks.push(this.state.inputValue);
    this.setState({
        newTasks
    });
  }

  secondItemDeleteHandler(index) {
    let tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({ tasks });
  }

  renderList() {
    let tasks = this.state.tasks;
    return (
        <ul>
            {
            tasks.map((task, index) => {
              return (
              <li key={index}>
                { task }
                <button onClick={() => this.secondItemDeleteHandler(index)}
                >
                X
                </button>
              </li>
              );
            })
            }
        </ul>
    );
  }

  render () {
    return (
      <Auxillary>
        <p>There are {this.props.details} things to do</p>
        <h2><strong>SecondList</strong></h2>
        <button onClick={() => this.addItemHandler()}>Second List Add Button</button>
        <input 
          type="text" 
          onChange={(e) => this.onInputChange(e)}
        />
        {this.renderList()}
      </Auxillary>
    );
  }
}

export default secondList;