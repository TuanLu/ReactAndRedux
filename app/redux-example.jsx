var redux = require('redux');
var axios = require('axios');
console.log('Using redux with React');
var defaultState = {
  name: 'Tim',
  iosDevices: [],
  phoneNumbers: []
};
var deviceCounter = 1;
//Reducer have to return new State
var oldReducer = (state = defaultState, action) => {
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
    case 'REMOVE_PHONE_NUMBER':
      return {
        ...state,
        phoneNumbers: state.phoneNumbers.filter((_phoneNum) => _phoneNum !== action.phoneNumber)
      };
    case 'REMOVE_IOS_DEVICE':
      return {
        ...state,
        iosDevices: state.iosDevices.filter((device) => device.id !== action.iosId)
      }
    default:
      return state;
  }
};
//======================
// Name reducer and action generator
var nameReducer = (state = 'Unknown', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};
var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  };
}
//======================
// iosDevices reducer and action generator
var iosDevicesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DEVICE':
      return [
        ...state,
        {
          id: deviceCounter++,
          device: action.device
        }
      ];
      break;
    case 'REMOVE_IOS_DEVICE':
      return state.filter((device) => device.id !== action.iosId);
    default:
      return state;
  }
};
var addIOSDevice = (device) => {
  return {
    type: 'ADD_DEVICE',
    device
  }
};
var removeIOSDevice = (iosId) => {
  return {
    type: 'REMOVE_IOS_DEVICE',
    iosId
  }
}
//======================
// phoneNumbersReducer reducer and action generator
var phoneNumbersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PHONE_NUMBER':
      return [
        ...state,
        action.phoneNumber
      ];
    case 'REMOVE_PHONE_NUMBER':
      return state.filter((phoneNum) => phoneNum !== action.phoneNumber);
    default:
      return state;
  }
};
var addPhoneNumber = (phoneNumber) => {
  return {
    type: 'ADD_PHONE_NUMBER',
    phoneNumber
  };
};
var removePhoneNumber = (phoneNumber) => {
  return {
    type: 'REMOVE_PHONE_NUMBER',
    phoneNumber
  };
}
//====== Asnc request reducer =======//
var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
};
var startFetchingLocation = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};
var completeFetchingLocation = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
};
var fetchingLocation = () => {
  store.dispatch(startFetchingLocation());
  axios.get('http://ipinfo.io').then(function(res) {
    if(res.data.loc) {
        var url = 'http://maps.google.com/?q=';
        store.dispatch(completeFetchingLocation(url + res.data.loc));
    }
  }, function(error) {
    console.warn(error);
  });
};
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

var currentState = store.getState();
//Using subscribe, shuold setup before dispatch
//subscribe will return a unsubcribe function, we can call if needed
var unsubcribe = store.subscribe(()=> {
  var state = store.getState();
  console.log('New state: ', state);
  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if(state.map.url) {
    document.getElementById('app').innerHTML = '<a target="_blank" href="'+ state.map.url +'">View Location</a>';
    console.log(state.map.url);
  }
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
store.dispatch(changeName('Tuan Lu'));
store.dispatch(addIOSDevice('iPhone'));
store.dispatch(addIOSDevice('Macbook Pro'));
store.dispatch(addIOSDevice('iPad Mini'));
store.dispatch(changeName("Bean"));
store.dispatch(addPhoneNumber(666888));
store.dispatch(addPhoneNumber(84333888));
store.dispatch(removePhoneNumber(84333888));
store.dispatch(removePhoneNumber(999));
store.dispatch(removeIOSDevice(2));
//Call asnc function
fetchingLocation();
