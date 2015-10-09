import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import Car from './Car.jsx';

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
    const cars = this.props.cars;
    return (
      <div id="car-list">
        {cars.map(car =>
          <Link to={'/' + car.id}>
            <Car  key={car.id} car={car} />
          </Link>
        )}
      </div>
    );
  }
});
