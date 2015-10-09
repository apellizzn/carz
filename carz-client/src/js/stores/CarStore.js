import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _data = {  cars: [], colors: [] };
let _car = { fuel: {}, brand: {} };

function loadCar(car) {
  _car = car;
}

function loadCars(cars) {
  _data.cars = cars;
}

function loadColors(colors) {
  _data.colors = colors;
}

// Facebook style store creation.
const CarStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
    return _data;
  },

  getCar() {
    return _car;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register((payload) => {
    let action = payload.action;
    switch (action.type) {
    case Constants.ActionTypes.COLORS_FETCHED:
      const colors = action.colors;
      loadColors(colors);
      CarStore.emitChange();
      break;
    case Constants.ActionTypes.CARS_FETCHED:
      const cars = action.cars;
      loadCars(cars);
      CarStore.emitChange();
      break;
    case Constants.ActionTypes.CAR_FETCHED:
      const car = action.car;
      loadCar(car);
      CarStore.emitChange(Constants.CHANGE_CAR);
      break;
    default:
      console.warn('not yet implemented...');
    // add more cases for other actionTypes...
    }
  })
});

export default CarStore;
