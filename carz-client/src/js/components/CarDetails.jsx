import React, {PropTypes} from 'react';
import {Paper, Tab, Tabs, List, ListItem, Card, CardMedia, CardTitle} from 'material-ui';
import {GoogleMap, Marker} from 'react-google-maps';

export default React.createClass({
  propTypes: {
    car: PropTypes.object.isRequired
  },

  render() {
    const car = this.props.car;
    return (
      <Paper id="car-details" zDepth={2}>
        <Card className="card">
          <CardMedia overlay={<CardTitle className="car-properties" title={car.name}/>}>
            <img src="http://lorempixel.com/600/337/nature/"/>
          </CardMedia>
        </Card>
        <Tabs>
          <Tab label="Details">
            <List className="car-properties car-properties1">
              <ListItem primaryText="Year" secondaryText={car.year}/>
              <ListItem primaryText="Km" secondaryText={car.km.toLocaleString()}/>
              <ListItem primaryText="Price" secondaryText={car.price.toLocaleString() + ' €'}/>
            </List>
            <List className="car-properties car-properties2">
              <ListItem primaryText="Fuel" secondaryText={car.fuel.name}/>
              <ListItem primaryText="Brand" secondaryText={car.brand.name}/>
              <ListItem style={{ borderBottom: '1px solid ' + car.color }} primaryText="Color" secondaryText={car.color}/>
            </List>
          </Tab>
          <Tab label="Find">
            <GoogleMap
              containerProps={{
                style: { height: '300px' }
              }}
              ref="map"
              defaultZoom={15}
              defaultCenter={{lat: car.latitude, lng: car.longitude}}>
                <Marker
                  position={{lat: car.latitude, lng: car.longitude}}
                  key="position"
                  defaultAnimation={2}
                />
              </GoogleMap>
          </Tab>
        </Tabs>
      </Paper>
    );
  }
});
