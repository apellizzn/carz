import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import {Card, CardMedia, CardTitle} from 'material-ui';


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
      <Card className="card">
        <CardMedia overlay={<CardTitle title={car.name} subtitle={car.brand.name + ' ' + car.color} />}>
          <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
      </Card>
    );
  },

  handleToggle(task) {
    if (this.refs.checkbox.isChecked()) {
      ActionCreator.completeTask(task);
    }
  }
});
