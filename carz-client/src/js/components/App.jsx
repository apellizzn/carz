import React, {PropTypes} from 'react';
import CarList from './CarList.jsx';
import {RaisedButton, Styles} from 'material-ui';

const ThemeManager = new Styles.ThemeManager();

export default React.createClass({
  propTypes: {
    cars: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      cars: []
    };
  },


  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    let {onAddTask, onClear, cars} = this.props;
    return (
      <div className="example-page">
        <h1>Learning Flux</h1>
        <p>
          Below is a list of tasks you can implement to better grasp the patterns behind Flux.<br />
          Most features are left unimplemented with clues to guide you on the learning process.
        </p>

        <CarList cars={cars} />

        <RaisedButton label="Add Task" primary={true} onClick={onAddTask} />
        <RaisedButton label="Clear List" secondary={true} onClick={onClear} />
      </div>
    );
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  }
});
