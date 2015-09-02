import React from 'react';
import TodoStore from '../stores/TodoStore';
import ActionCreator from '../actions/TodoActionCreators';
import App from './App.jsx';

export default React.createClass({

  getInitialState() {
    return TodoStore.getAll();
  },

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  },

  render() {
    let {tasks} = this.state;
    return (
      <App
        onAddTask={this.handleAddTask}
        onClear={this.handleClear}
        tasks={tasks} />
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
    this.setState(TodoStore.getAll());
  }
});
