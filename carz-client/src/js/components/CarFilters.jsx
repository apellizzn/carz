import React from 'react';
import {Slider, Paper, List, ListItem, Checkbox} from 'material-ui';

export default React.createClass({
  getDefaultProps() {
    return {
      brands: [],
      maxPrice: 1
    };
  },

  getInitialState() {
    return {
      maxPrice: 1,
      maxKm: 1
    };
  },

  onPriceChange(e, value) {
    this.setState({ maxPrice: value});
  },

  onKmChange(e, value) {
    this.setState({ maxKm: value});
  },

  render() {
    let {brands} = this.props;
    let {maxPrice, maxKm} = this.state;
    return (
      <Paper id="car-filters" zDepth="2">
        <Slider name="price" onChange={this.onPriceChange} defaultValue={maxPrice} min={0} step={0.1} max={1} description={'Price up to ' + maxPrice * 10000 + ' € '}/>
        <Slider name="km" onChange={this.onKmChange} defaultValue={maxKm} min={0} step={0.1} max={1} description={'Km up to ' + maxKm * 100000}/>
        <Slider name="year" defaultValue={0.5} step={0.10} description="Year"/>
        <label>Brands</label>
          <List>
            {brands.map(brand =>
              <ListItem
                leftCheckbox={<Checkbox name="brand" value={brand.id}/>}
                primaryText={brand.name}
              />
            )}
          </List>
      </Paper>
    );
  }
});
