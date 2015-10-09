import React, {PropTypes} from 'react';
import {Paper, Tab, Tabs, List, ListItem, Card, CardMedia, CardTitle, CircularProgress} from 'material-ui';
import {GoogleMap, Marker} from 'react-google-maps';

export default React.createClass({
  propTypes: {
    km: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    fuel: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  },

  render() {
    const { km, price, year, name, fuel, brand, color, lat, lng } = this.props;
    let content;
    if (!name) {
      content = <CircularProgress mode="indeterminate" size={2} />;
    } else {
      const position = {lat: lat, lng: lng};
      content = (
        <Paper id="car-details" zDepth={2}>
          <Card className="card">
            <CardMedia overlay={<CardTitle className="car-properties" title={name}/>}>
              <img src="http://lorempixel.com/600/337/nature/"/>
            </CardMedia>
          </Card>
          <Tabs>
            <Tab label="Details">
              <List className="car-properties car-properties1">
                <ListItem primaryText="Year" secondaryText={year}/>
                <ListItem primaryText="Km" secondaryText={km.toLocaleString()}/>
                <ListItem primaryText="Price" secondaryText={price.toLocaleString() + ' €'}/>
              </List>
              <List className="car-properties car-properties2">
                <ListItem primaryText="Fuel" secondaryText={fuel}/>
                <ListItem primaryText="Brand" secondaryText={brand}/>
                <ListItem style={{ borderBottom: '1px solid ' + color }} primaryText="Color" secondaryText={color}/>
              </List>
            </Tab>
            <Tab label="Find">
              <GoogleMap
                containerProps={{
                  style: { height: '300px' }
                }}
                ref="map"
                defaultZoom={15}
                defaultCenter={position}>
                  <Marker
                    position={position}
                    key="position"
                    defaultAnimation={2}
                  />
                </GoogleMap>
            </Tab>
          </Tabs>
        </Paper>
      );
    }
    return content;
  }
});
