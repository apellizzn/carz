import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import {Card, CardMedia, CardTitle, CardText, CardActions, FlatButton} from 'material-ui';


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
      <Card>
        <CardMedia overlay={<CardTitle title={car.name} subtitle={car.brand.name} />}>
          <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );
  },

  handleToggle(task) {
    if (this.refs.checkbox.isChecked()) {
      ActionCreator.completeTask(task);
    }
  }
});
