var redux = require('redux');
console.log('Using redux with React');
var defaultState = {
  name: 'Tim'
};
//Reducer have to return new State
var reducer = (state = defaultState, action) => {
  //state = state || {name: 'Anonymous'};
  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      return state;
  }
};
//1 store which store all state of whole app
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('before dispatch state', currentState);
//Action and dispatch
//Action should always have "type" prop
var action = {
  type: 'CHANGE_NAME',
  name: 'Tuan Lu',
};
//Dispatch an event to reducer
store.dispatch(action);
console.log('new state after dispatch an action', store.getState());
