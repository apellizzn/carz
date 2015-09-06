import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import Ajax from 'jquery';

export default {
  loadBrands() {
    Ajax.get(Constants.API.BRANDS, data => {
      Dispatcher.handleServerAction({
        type: Constants.ActionTypes.BRANDS_FETCHED,
        brands: data
      })
    });
  },

  loadCars() {
    Ajax.get(Constants.API.CARS, data => {
      Dispatcher.handleServerAction({
        type: Constants.ActionTypes.CARS_FETCHED,
        cars: data
      })
    });
  },

  clearList() {
    console.warn('clearList action not yet implemented...');
  },

  completeTask() {
    console.warn('completeTask action not yet implemented...');
  }
};
