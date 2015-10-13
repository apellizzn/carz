import React from 'react';
import ActionCreator from '../actions/ActionCreator';
import BrandStore from '../stores/BrandStore';
import FuelStore from '../stores/FuelStore';
import EditCar from '../components/EditCar.jsx';
import {Styles} from 'material-ui';
import _ from 'lodash';

const ThemeManager = new Styles.ThemeManager();

export default React.createClass({

  getInitialState() {
    ActionCreator.loadBrands();
    ActionCreator.loadFuels();
    return _.merge(
      BrandStore.getAll(),
      FuelStore.getAll()
    );
  },

  componentDidMount() {
    BrandStore.addChangeListener(this._onChange);
    FuelStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    BrandStore.removeChangeListener(this._onChange);
    FuelStore.removeChangeListener(this._onChange);
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    const {brands, fuels} = this.state;
    return <EditCar brands={brands} fuels={fuels} />;
  },

  _onChange() {
    this.setState(_.merge(BrandStore.getAll(), FuelStore.getAll()));
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  }
});
