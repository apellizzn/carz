import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import Ajax from 'jquery';

export default {

  _sanitize(object) {
    for (let index in object) {
      if ((!object[index] && object[ index ] !== false && object[index] !== 0) || object[index] === []) {
        delete object[index];
      }
    }
    return object;
  },

  loadBrands() {
    Ajax.get(Constants.API.BRANDS, data => {
      Dispatcher.handleServerAction({
        type: Constants.ActionTypes.BRANDS_FETCHED,
        brands: data
      });
    });
  },

  loadFuels() {
    Ajax.get(Constants.API.FUELS, data => {
      Dispatcher.handleServerAction({
        type: Constants.ActionTypes.FUELS_FETCHED,
        fuels: data
      });
    });
  },

  loadCars(params) {
    Ajax.get(Constants.API.CARS, this._sanitize(params), data => {
      Dispatcher.handleServerAction({
        type: Constants.ActionTypes.CARS_FETCHED,
        cars: data
      });
    });
  }
};
