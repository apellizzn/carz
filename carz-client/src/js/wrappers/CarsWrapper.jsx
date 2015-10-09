import React from 'react';
import ActionCreator from '../actions/ActionCreator';
import CarStore from '../stores/CarStore';
import BrandStore from '../stores/BrandStore';
import FuelStore from '../stores/FuelStore';
import CarList from '../components/CarList.jsx';
import CarFilters from '../components/CarFilters.jsx';
import {Styles} from 'material-ui';
import _ from 'lodash';

const ThemeManager = new Styles.ThemeManager();

export default React.createClass({

  getInitialState() {
    ActionCreator.loadBrands();
    ActionCreator.loadCars();
    ActionCreator.loadFuels();
    ActionCreator.loadColors();
    return _.merge(
      CarStore.getAll(),
      BrandStore.getAll(),
      FuelStore.getAll()
    );
  },

  componentDidMount() {
    CarStore.addChangeListener(this._onChange);
    BrandStore.addChangeListener(this._onChange);
    FuelStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    CarStore.removeChangeListener(this._onChange);
    BrandStore.removeChangeListener(this._onChange);
    FuelStore.removeChangeListener(this._onChange);
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    const {cars, brands, colors, fuels} = this.state;
    return (
      <div>
        <CarFilters brands={brands} colors={colors} fuels={fuels}/>
        <CarList cars={cars}/>
      </div>
    );
  },

  _onChange() {
    this.setState(_.merge(CarStore.getAll(), BrandStore.getAll(), FuelStore.getAll()));
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  }
});
