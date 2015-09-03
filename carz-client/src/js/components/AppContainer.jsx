import React from 'react';
import CarStore from '../stores/CarStore';
import ActionCreator from '../actions/TodoActionCreators';
import App from './App.jsx';

export default React.createClass({

  getInitialState() {
    return CarStore.getAll();
  },

  componentDidMount() {
    CarStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    CarStore.removeChangeListener(this._onChange);
  },

  render() {
    let {cars} = this.state;
    return (
      <App
        onAddTask={this.handleAddTask}
        onClear={this.handleClear}
        cars={cars} />
    );
  },

  handleAddTask() {
    let title = prompt('Enter task title:');
    if (title) {
      ActionCreator.addItem(title);
    }
  },

  handleClear() {
    ActionCreator.clearList();
  },

  _onChange() {
    this.setState(CarStore.getAll());
  }
});
