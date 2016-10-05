console.log('Using redux with React');
//======================
var store = require('./store/configureStore').configure();
var actions = require('./actions/index');
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
// store.dispatch(actions.changeName('Tuan Lu'));
// store.dispatch(actions.addIOSDevice('iPhone'));
// store.dispatch(actions.addIOSDevice('Macbook Pro'));
// store.dispatch(actions.addIOSDevice('iPad Mini'));
// store.dispatch(actions.changeName("Bean"));
// store.dispatch(actions.addPhoneNumber(666888));
// store.dispatch(actions.addPhoneNumber(84333888));
// store.dispatch(actions.removePhoneNumber(84333888));
// store.dispatch(actions.removePhoneNumber(999));
// store.dispatch(actions.removeIOSDevice(2));
//Call asnc function
actions.fetchingLocation(store);
