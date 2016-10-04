var redux = require('redux');
console.log('Using redux with React');
var defaultState = {
  name: 'Tim',
  iosDevices: [],
  phoneNumbers: []
};
var deviceCounter = 1;
//Reducer have to return new State
var reducer = (state = defaultState, action) => {
  //state = state || {name: 'Anonymous'};
  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_DEVICE':
      return {
        ...state,
        iosDevices: [
          ...state.iosDevices,
          {
            id: deviceCounter++,
            device: action.device
          }
        ]
      };
    case 'ADD_PHONE_NUMBER':
      return {
        ...state,
        phoneNumbers: [
          ...state.phoneNumbers,
          action.phoneNumber
        ]
      };
    default:
      return state;
  }
};
//1 store which store all state of whole app
//Use second param to connect with Redux developer tool in Chrome
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : fun => fun
));

var currentState = store.getState();
console.log('before dispatch state', currentState);
//Using subscribe, shuold setup before dispatch
//subscribe will return a unsubcribe function, we can call if needed
var unsubcribe = store.subscribe(()=> {
  var state = store.getState();
  console.log('New state: ', state);
});
//If we call unsubcribe function, then subscribe will not be called at all
//unsubcribe();
//Action and dispatch
//Action should always have "type" prop
var action = {
  type: 'CHANGE_NAME',
  name: 'Tuan Lu',
};
//Dispatch an event to reducer
store.dispatch(action);
store.dispatch({
  type: 'ADD_DEVICE',
  device: 'iPhone'
});
store.dispatch({
  type: 'ADD_DEVICE',
  device: 'Macbook Pro'
});
store.dispatch({
  type: 'ADD_DEVICE',
  device: 'iPad Mini'
});
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Bean'
});
store.dispatch({
  type: 'ADD_PHONE_NUMBER',
  phoneNumber: 666888
});
store.dispatch({
  type: 'ADD_PHONE_NUMBER',
  phoneNumber: 111999
});
store.dispatch({
  type: 'ADD_PHONE_NUMBER',
  phoneNumber: 9669
});
