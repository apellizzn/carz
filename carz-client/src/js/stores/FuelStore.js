import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _data = { fuels: [] };

function loadFuels(fuels) {
  _data.fuels = fuels;
}
// Facebook style store creation.
const FuelStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
    return _data;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register((payload) => {
    let action = payload.action;
    switch (action.type) {
    case Constants.ActionTypes.FUELS_FETCHED:
      const fuels = action.fuels;
      loadFuels(fuels);
      FuelStore.emitChange();
      break;
    default:
      console.warn('not yet implemented...');
    // add more cases for other actionTypes...
    }
  })
});

export default FuelStore;
