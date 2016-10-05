export var nameReducer = (state = 'Unknown', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};
var deviceCounter = 1;
export var iosDevicesReducer = (state = [], action) => {
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
export var phoneNumbersReducer = (state = [], action) => {
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
export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
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
