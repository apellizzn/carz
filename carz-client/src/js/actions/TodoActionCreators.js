import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import Ajax from 'jquery';

export default {
  addItem(text) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_ADDED,
      text: text
    });
  },

  loadCars() {
    Ajax.get(Constants.API.CARS, data => {
      console.info(data);
    });
  },

  clearList() {
    console.warn('clearList action not yet implemented...');
  },

  completeTask() {
    console.warn('completeTask action not yet implemented...');
  }
};