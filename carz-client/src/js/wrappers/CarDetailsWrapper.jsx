import React from 'react';
import Constants from '../Constants';
import ActionCreator from '../actions/ActionCreator';
import CarStore from '../stores/CarStore';
import CarDetails from '../components/CarDetails.jsx';
import {Styles} from 'material-ui';

const ThemeManager = new Styles.ThemeManager();

export default React.createClass({

  getInitialState() {
    ActionCreator.loadCar(this.props.params.carId);
    return CarStore.getCar();
  },

  componentDidMount() {
    CarStore.addChangeListener(this._onChange, Constants.CHANGE_CAR);
  },

  componentWillUnmount() {
    CarStore.removeChangeListener(this._onChange, Constants.CHANGE_CAR);
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    const {km, name, price, latitude, longitude, brand, fuel, color, year} = this.state;
    return (
      <CarDetails
        km={km} price={price} year={year} name={name}
        fuel={fuel.name} brand={brand.name} color={color}
        lat={latitude} lng={longitude}
      />
    );
  },

  _onChange() {
    this.setState(CarStore.getCar());
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  }
});
