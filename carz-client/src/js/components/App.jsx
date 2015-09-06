import React, {PropTypes} from 'react';
import CarList from './CarList.jsx';
import CarFilters from './CarFilters.jsx';
import {Styles} from 'material-ui';

const ThemeManager = new Styles.ThemeManager();

export default React.createClass({
  propTypes: {
    cars: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      cars: [],
      brands: []
    };
  },


  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    let {brands, cars} = this.props;
    return (
      <div className="example-page">
        <h1>Car shop Online</h1>
        <p>
          Below is a list of tasks you can implement to better grasp the patterns behind Flux.<br />
          Most features are left unimplemented with clues to guide you on the learning process.
        </p>
        <CarFilters brands={brands}/>
        <CarList cars={cars} />
      </div>
    );
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  }
});
