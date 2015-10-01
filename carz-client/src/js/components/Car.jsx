import React, {PropTypes} from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import {Card, CardMedia, CardTitle, CardActions, FlatButton} from 'material-ui';

export default React.createClass({
  propTypes: {
    car: PropTypes.object.isRequired
  },

  render() {
    const car = this.props.car;
    return (
      <Card className="card">
        <CardMedia overlay={<CardTitle title={car.name} subtitle={car.brand.name + ' ' + car.color} />}>
          <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
        <CardActions>
          <FlatButton label="Details"/>
        </CardActions>
      </Card>
    );
  },

  handleToggle(task) {
    if (this.refs.checkbox.isChecked()) {
      ActionCreator.completeTask(task);
    }
  }
});
