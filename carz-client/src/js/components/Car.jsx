import React, {PropTypes} from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui';


export default React.createClass({
  propTypes: {
    car: PropTypes.object.isRequired
  },

  render() {
    const car = this.props.car;
    return (
      <Card className="card">
        <CardMedia overlay={
          <CardTitle className="car-properties" title={car.brand.name + ' ' + car.name}
            subtitle={
              <div>
                <div>Year :  {car.year}</div>
                <div>Price : {car.price.toLocaleString() + ' €'}</div>
                <div>Km : {car.km.toLocaleString()}</div>
                <div>Fuel : {car.fuel.name}</div>
              </div>
            }
          />}
        >
          <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
      </Card>
    );
  }
});
