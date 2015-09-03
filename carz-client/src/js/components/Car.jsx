import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import {Checkbox} from 'material-ui';

export default React.createClass({
  getDefaultProps() {
    return {
      car: {
        name: '',
        km: 0,
        color: 'transparent',
        power: 0,
        pirce: 0,
        year: 2000
      }
    };
  },

  render() {
    let {car} = this.props;
    return (
      <div style={{ backgroundColor: car.color }}>
        <h1>{car.name}</h1>
        <label>KM : </label><span>{ car.km }</span>
      </div>
    );
  },

  handleToggle(task) {
    if (this.refs.checkbox.isChecked()) {
      ActionCreator.completeTask(task);
    }
  }
});
