import React, {PropTypes} from 'react';
import Car from './Car.jsx';
import CarDetails from './CarDetails.jsx';
// import {Paper, Tabs, Tab} from 'material-ui';
import _ from 'lodash';

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
      content = <CarDetails car={car}/>;
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
