var axios = require('axios');
export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  };
}
export var addIOSDevice = (device) => {
  return {
    type: 'ADD_DEVICE',
    device
  }
};
export var removeIOSDevice = (iosId) => {
  return {
    type: 'REMOVE_IOS_DEVICE',
    iosId
  }
}
export var addPhoneNumber = (phoneNumber) => {
  return {
    type: 'ADD_PHONE_NUMBER',
    phoneNumber
  };
};
export var removePhoneNumber = (phoneNumber) => {
  return {
    type: 'REMOVE_PHONE_NUMBER',
    phoneNumber
  };
}
export var startFetchingLocation = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};
export var completeFetchingLocation = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
};
export var fetchingLocation = (store) => {
  console.log('Store of app here', store);
  store.dispatch(startFetchingLocation());
  axios.get('http://ipinfo.io').then(function(res) {
    if(res.data.loc) {
        var url = 'http://maps.google.com/?q=';
        store.dispatch(completeFetchingLocation(url + res.data.loc));
        store.dispatch(addPhoneNumber(888888));
    }
  }, function(error) {
    console.warn(error);
  });
};
export var uploadPhoto = (url) => {
  return {
    type: 'UPLOAD_PHOTO',
    url
  };
};
