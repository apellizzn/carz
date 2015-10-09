import assign from 'object-assign';
import Constants from '../Constants';
import {EventEmitter} from 'events';

export default assign({}, EventEmitter.prototype, {
  // Allow Controller-View to register itself with store
  addChangeListener(callback, changeEvent) {
    const event = changeEvent || Constants.CHANGE_EVENT;
    this.on(event, callback);
  },

  removeChangeListener(callback, changeEvent) {
    const event = changeEvent || Constants.CHANGE_EVENT;
    this.removeListener(event, callback);
  },

  // triggers change listener above, firing controller-view callback
  emitChange(changeEvent) {
    this.emit(changeEvent || Constants.CHANGE_EVENT);
  }
});
