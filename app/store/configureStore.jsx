var redux = require('redux');
var reducers = require('reducers');
var {nameReducer, iosDevicesReducer, phoneNumbersReducer, mapReducer} = reducers;
export var configure = () => {
  var reducer = redux.combineReducers({
    name: nameReducer,
    iosDevices: iosDevicesReducer,
    phoneNumbers: phoneNumbersReducer,
    map: mapReducer
  });
  //1 store which store all state of whole app
  //Use second param to connect with Redux developer tool in Chrome
  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : fun => fun
  ));
  return store;
}
