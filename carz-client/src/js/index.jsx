import React from 'react';
import AppContainer from './components/AppContainer.jsx';
import ActionCreator from './actions/TodoActionCreators';

React.render(<AppContainer />, document.getElementById('main'));
ActionCreator.loadBrands();
ActionCreator.loadCars();
ActionCreator.loadFuels();
