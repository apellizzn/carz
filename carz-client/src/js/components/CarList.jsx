import React, {PropTypes} from 'react';
import Car from './Car.jsx';

export default React.createClass({

  propTypes: {
    cars: PropTypes.array.isRequired,
    openCar: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      cars: []
    };
  },

  render() {
    const cars = this.props.cars;
    return (
      <div id="car-list">
        {cars.map(car => <Car openCar={this.openCar} key={car.id} car={car} />)}
      </div>
    );
  },

  openCar(carId) {
    this.props.openCar(carId);
  }
});
