import React from 'react';
import ReactSlider  from 'react-slider';
import ActionCreator from '../actions/TodoActionCreators';
import {Paper, FlatButton, List, ListItem, Checkbox} from 'material-ui';

export default React.createClass({
  getDefaultProps() {
    return {
      brands: [],
      fuels: [],
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
      brandIds: []
    };
  },

  onToggleBrand(e, checked) {
    let { brandIds } = this.state;
    if (checked) { brandIds.push(e.target.value); }
    else {
      const index = brandIds.indexOf(e.target.value);
      brandIds.splice(index, 1);
    }
    this.setState({ brandIds: brandIds });
  },

  onPriceChange(range) {
    this.setState({ cMinPrice: range[0], cMaxPrice: range[1] });
  },

  onKmChange(range) {
    this.setState({ cMinKm: range[0], cMaxKm: range[1] });
  },

  render() {
    let colors = ["red","yellow", "green", "brown", "violet", "pink"];
    let {brands, fuels, maxPrice, minPrice, minKm, maxKm} = this.props;
    let {cMinPrice, cMaxPrice, cMinKm, cMaxKm} = this.state;
    return (
      <Paper id="car-filters" zDepth="2">
        <label>Price</label>
        <ReactSlider onChange={this.onPriceChange} className="horizontal-slider" withBars step={1000} min={minPrice} max={maxPrice}>
          <div className="min">{cMinPrice}</div>
          <div className="max">{cMaxPrice}</div>
        </ReactSlider>
        <label>Km</label>
        <ReactSlider onChange={this.onKmChange} className="horizontal-slider" withBars step={1000} min={minKm} max={maxKm}>
          <div className="min">{cMinKm}</div>
          <div className="max">{cMaxKm}</div>
        </ReactSlider>
        <label>Brands</label>
          <List>
            {brands.map(brand =>
              <ListItem
                leftCheckbox={<Checkbox name="brand" refs={'brand' + brand.id} onCheck={this.onToggleBrand} value={brand.id}/>}
                primaryText={brand.name}
              />
            )}
          </List>
        <label>Fuels</label>
          <List>
            {fuels.map(fuel =>
              <ListItem
                leftCheckbox={<Checkbox name="fuel" value={fuel.id}/>}
                primaryText={fuel.name}
              />
            )}
          </List>
          <label>Color</label>
          <div className="colors-mosaic">
          {
            colors.map(color => <Paper circle={true} className="color-cell" style={ { backgroundColor: color } }/>)
          }
          </div>
          <FlatButton label="Apply" style={{ 'float': 'left'}} secondary={true} onClick={this.applyFilters}/>
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
      brand_ids: this.state.brandIds
    };
  }

});
