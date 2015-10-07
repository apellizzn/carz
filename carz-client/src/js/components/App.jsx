import React, {PropTypes} from 'react';
import CarList from './CarList.jsx';
import CarDetails from './CarDetails.jsx';
import CarFilters from './CarFilters.jsx';
import {Styles} from 'material-ui';
import _ from 'lodash';


const ThemeManager = new Styles.ThemeManager();

export default React.createClass({
  propTypes: {
    cars: PropTypes.array.isRequired,
    brands: PropTypes.array.isRequired,
    fuels: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired
  },

  getDefaultProps() {
    return {
      cars: [],
      brands: [],
      fuels: [],
      colors: []
    };
  },

  getInitialState() {
    return { carId: null };
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    let {brands, cars, fuels, colors} = this.props;
    const {carId} = this.state;
    let content;
    if (carId) {
      const car = _.find(cars, (cCar) => cCar.id === carId);
      content = <CarDetails car={car}/>;
    } else {
      content = (
        <div>
          <CarFilters brands={brands} fuels={fuels} colors={colors}/>
          <CarList openCar={this.openCar} cars={cars}/>
        </div>
      );
    }
    return (
      <div className="main-page">
      <h1 onClick={this.goHome}>Car shop Online</h1>
      <p>
        Below is a list of tasks you can implement to better grasp the patterns behind Flux.<br />
        Most features are left unimplemented with clues to guide you on the learning process.
      </p>
        {content}
      </div>
    );
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  goHome() {
    this.setState({carId: null});
  },

  openCar(carId) {
    this.setState({carId: carId});
  }
});
