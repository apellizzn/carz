import React from 'react';
import ReactSlider  from 'react-slider';
import ActionCreator from '../actions/TodoActionCreators';
import _ from 'lodash';
import CollapsedFilter from './CollapsedFilter.jsx';
import {Paper, FlatButton} from 'material-ui';

export default React.createClass({
  getDefaultProps() {
    return {
      brands: [],
      fuels: [],
      colors: [],
      maxPrice: 10000,
      minPrice: 0,
      maxKm: 100000,
      minKm: 0
    };
  },

  getInitialState() {
    return {
      cMaxPrice: this.props.maxPrice,
      cMinPrice: this.props.minPrice,
      cMinKm: this.props.minKm,
      cMaxKm: this.props.maxKm,
      brandIds: [],
      fuelIds: [],
      cColors: []
    };
  },

  onColorPick(color) {
    let { cColors } = this.state;
    _.includes(cColors, color) ? _.pull(cColors, color) : cColors.push(color);
    this.setState({ cColors: cColors });
  },

  onToggleBrand(e, checked) {
    let { brandIds } = this.state;
    checked ? brandIds.push(e.target.value) : _.pull(brandIds, e.target.value);
    this.setState({ brandIds: brandIds });
  },

  onToggleFuel(e, checked) {
    let { fuelIds } = this.state;
    checked ? fuelIds.push(e.target.value) : _.pull(fuelIds, e.target.value);
    this.setState({ fuelIds: fuelIds });
  },

  onPriceChange(range) {
    this.setState({ cMinPrice: range[0], cMaxPrice: range[1] });
  },

  onKmChange(range) {
    this.setState({ cMinKm: range[0], cMaxKm: range[1] });
  },

  render() {
    let {brands, colors, fuels, maxPrice, minPrice, minKm, maxKm} = this.props;
    let {cMinPrice, cMaxPrice, cMinKm, cMaxKm, cColors} = this.state;
    return (
      <Paper id="car-filters" zDepth="2">
        <h3>Price</h3>
        <ReactSlider onChange={this.onPriceChange} className="horizontal-slider" withBars step={1000} min={minPrice} max={maxPrice}>
          <div className="min">{cMinPrice}</div>
          <div className="max">{cMaxPrice}</div>
        </ReactSlider>
        <h3>Km</h3>
        <ReactSlider onChange={this.onKmChange} className="horizontal-slider" withBars step={1000} min={minKm} max={maxKm}>
          <div className="min">{cMinKm}</div>
          <div className="max">{cMaxKm}</div>
        </ReactSlider>
        <hr/>
        <CollapsedFilter title="Brands" source={brands} onToggle={this.onToggleBrand}/>
        <hr/>
        <CollapsedFilter title="Fuels" source={fuels} onToggle={this.onToggleFuel}/>
        <hr/>
        <h3>Color</h3>
        <div className="colors-mosaic">
        {
          colors.map(color =>
              <Paper
                key={'color#' + color}
                onClick={this.onColorPick.bind(this, color)}
                circle={true}
                className={ 'color-cell ' + (_.includes(cColors, color) ? 'selected' : '') }
                style={ { backgroundColor: color } }/>)
        }
        </div>
        <hr style={{ clear: 'both'}}/>
        <FlatButton label="Apply" style={{ 'float': 'left'}} secondary={true} onClick={this.applyFilters}/>
        <FlatButton label="Clear" style={{ 'float': 'right'}} secondary={true} onClick={this.applyFilters}/>
      </Paper>
    );
  },

  applyFilters() {
    ActionCreator.loadCars(this._getFilters());
  },

  _getFilters() {
    return {
      min_price: this.state.cMinPrice,
      max_price: this.state.cMaxPrice,
      min_km: this.state.cMinKm,
      max_km: this.state.cMaxKm,
      brand_ids: this.state.brandIds,
      fuel_ids: this.state.fuelIds,
      colors: this.state.cColors
    };
  }
});
