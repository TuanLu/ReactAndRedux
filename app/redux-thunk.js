console.log('Testing redux thunk middleware!');
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const defaultInfo = {
  name: 'Tim',
  age: 25,
  career: 'Web Developer',
  isValid: false
}
const rootReducer = (state = defaultInfo, action) => {
  switch(action.type) {
    case 'CHANGE_NAME': {
      return {
        ...state,
        name: action.name
      };
      break;
    }
    default:
      return state;
      break;
  };
  //return state;
}
//Use middleware for asnc action creator
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

//Normal action creator
var normalActionCreator = function(newName) {
  return {
    type: 'CHANGE_NAME',
    name: newName
  }
}
//Async action creator
var startValidName = () => {
  return {
    type: 'START_VALID_NAME'
  }
}
var completeValidName = (name, validtor) => {
  return {
    type: 'DONE_VALID_NAME',
    name,
    validtor
  }
}
//Use middleware for asnc action creator
var waitToValidToChangeName = function() {
  return (dispatch, getState) => {
    dispatch(startValidName());
    setTimeout(function() {
      //console.info('asnc',getState());
      dispatch(normalActionCreator('LU DUC TUAN - NEW'));
    },2000);
  }
}
store.subscribe(function() {
  console.log('new state', store.getState());
});
store.dispatch(normalActionCreator('My Tra'));
store.dispatch(normalActionCreator('Tuan Lu'));
store.dispatch(waitToValidToChangeName());
