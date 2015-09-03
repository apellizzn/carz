import React from 'react';
import Car from './Car.jsx';
// import {Paper} from 'material-ui';

export default React.createClass({
  getDefaultProps() {
    return {
      cars: []
    };
  },

  render() {
    let {cars} = this.props;
    return (
      <form id="car-list">
        {cars.map(car => <Car car={car} />)}
      </form>
    );
  }
});
