import keyMirror from 'react/lib/keyMirror';

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: keyMirror({
    CARS_FETCHED: 'cars-fetch',
    BRANDS_FETCHED: 'brands-fetch',
    FUELS_FETCHED: 'fuels-fetch',
    COLORS_FETCHED: 'colors-fetch'
  }),

  API: {
    CARS: 'http://localhost:3000/cars',
    BRANDS: 'http://localhost:3000/brands',
    FUELS: 'http://localhost:3000/fuels',
    COLORS: 'http://localhost:3000/cars/colors'
  },

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
