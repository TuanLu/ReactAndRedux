import ReduxThunkExample from './redux-thunk';
import Logo from './components/Logo';
var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
//====== Combine with redux
// var actions = require('actions');
// var store = require('configureStore').configure();
// store.subscribe(()=> {
//   console.info('New State', store.getState());
// });
// store.dispatch(actions.changeName("Lu Duc Tuan"));
// store.dispatch(actions.addPhoneNumber(666888));
// store.dispatch(actions.addIOSDevice('iPhone 5s'));
ReactDOM.render(
  <div>
      <Main />
      <Logo />
  </div>
  ,
  document.getElementById('app')
);

//require('./redux-example.jsx');
