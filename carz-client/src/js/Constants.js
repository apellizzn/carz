import keyMirror from 'react/lib/keyMirror';

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: keyMirror({
    CARS_FETCHED: 'cars-fetch',
    BRANDS_FETCHED: 'brands-fetch'
  }),

  API: {
    CARS: 'http://localhost:3000/cars',
    BRANDS: 'http://localhost:3000/brands'
  },

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
