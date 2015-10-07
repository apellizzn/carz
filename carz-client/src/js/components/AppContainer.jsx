import React from 'react';
import CarStore from '../stores/CarStore';
import App from './App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export default React.createClass({

  getInitialState() {
    return CarStore.getAll();
  },

  componentDidMount() {
    CarStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    CarStore.removeChangeListener(this._onChange);
  },

  render() {
    let {cars, brands, fuels, colors} = this.state;
    return (
      <App cars={cars} brands={brands} fuels={fuels} colors={colors}/>
    );
  },

  _onChange() {
    this.setState(CarStore.getAll());
  }
});
