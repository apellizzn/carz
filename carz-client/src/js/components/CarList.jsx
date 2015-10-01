import React, {PropTypes} from 'react';
import Car from './Car.jsx';
// import {Paper} from 'material-ui';

export default React.createClass({

  propTypes: {
    cars: PropTypes.array.isRequired
  },

  getDefaultProps() {
    return {
      cars: []
    };
  },

  render() {
    let {cars} = this.props;
    return (
      <div id="car-list">
        {cars.map(car => <Car key={car.id} car={car} />)}
      </div>
    );
  }
});
