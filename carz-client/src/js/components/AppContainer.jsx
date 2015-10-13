import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import App from './App.jsx';
import CarsWrapper from '../wrappers/CarsWrapper.jsx';
import EditCarWrapper from '../wrappers/EditCarWrapper.jsx';
import CarDetailsWrapper from '../wrappers/CarDetailsWrapper.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export default React.createClass({

  render() {
    return (
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={CarsWrapper}/>
          <Route path="/add" component={EditCarWrapper}/>
          <Route path="/:carId" component={CarDetailsWrapper}/>
        </Route>
      </Router>
    );
  }
});
