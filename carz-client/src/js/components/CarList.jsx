import React, {PropTypes} from 'react';
import Car from './Car.jsx';
import {Paper} from 'material-ui';
import _ from 'lodash';
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

  getInitialState() {
    return {
      carId: null
    };
  },

  render() {
    const cars = this.props.cars;
    const carId = this.state.carId;
    let content;
    if (carId) {
      const car = _.find(cars, (cCar) => cCar.id === carId);
      content = (
        <Paper id="car-details" zDepth={2}>
          <div>Year :  {car.year}</div>
          <div>Price : {car.price.toLocaleString() + ' €'}</div>
          <div>Km : {car.km.toLocaleString()}</div>
          <div>Fuel : {car.fuel.name}</div>
        </Paper>
      );
    } else {
      content = (
        <div id="car-list">
          {cars.map(car => <Car openCar={this.openCar} key={car.id} car={car} />)}
        </div>
      );
    }
    return content;
  },

  openCar(carId) {
    this.setState({carId: carId});
  }
});
