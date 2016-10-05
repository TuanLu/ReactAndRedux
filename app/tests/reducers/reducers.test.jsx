var expect = require('expect');
var reducers = require('reducers');
//reducer are pure function, make sure the input and the output not change
//that why we use deep-freeze-strict lib to track for us
var df = require('deep-freeze-strict');
describe('Test Reducer', () => {
  describe('nameReducer', () => {
    it('shuold change name properly', () => {
      var action = {
        type: 'CHANGE_NAME',
        name: 'Tuan Lu Duc'
      };
      var res = reducers.nameReducer(df(''), df(action));
      expect(action.name).toEqual(res);
    });
  });
  describe('iosDevicesReducer', () => {
    it('should add a device', () => {
      var action = {
        type: 'ADD_DEVICE',
        device: 'iPod'
      };
      var devices = [
        {
          id: 1,
          device: 'iPod'
        }
      ]
      var res = reducers.iosDevicesReducer(df([]), df(action));
      expect(res).toEqual(devices);
    });
    it('should add a device to exist list', () => {
      var action = {
        type: 'ADD_DEVICE',
        device: 'Macbook Pro'
      };
      var devices = [
        {
          id: 1,
          device: 'iPod'
        },
        {
          id: 2,
          device: 'Macbook Pro'
        }
      ];
      var defaultDevices = [
        {
          id: 1,
          device: 'iPod'
        }
      ];
      var res = reducers.iosDevicesReducer(df(defaultDevices), df(action));
      expect(res).toEqual(devices);
    });
    it('should remove device from list', () => {
      var devices = [
        {
          id: 1,
          device: 'iPod'
        },
        {
          id: 2,
          device: 'Macbook Pro'
        }
      ];
      var expectedResult = [
        {
          id: 1,
          device: 'iPod'
        }
      ];
      var action = {
        type: 'REMOVE_IOS_DEVICE',
        iosId: 2
      };
      var res = reducers.iosDevicesReducer(df(devices), df(action));
      expect(res).toEqual(expectedResult);
      var action = {
        type: 'REMOVE_IOS_DEVICE',
        iosId: 5
      };
      var res = reducers.iosDevicesReducer(df(devices), df(action));
      expect(res).toEqual(devices);
    });
  });
  describe('removePhoneNumberReducer', () => {
    it('shuold remove phone number from list', () => {
      var phoneNumbers = [666,888];
      var action = {
        type: 'REMOVE_PHONE_NUMBER',
        phoneNumber: 777
      };
      var res = reducers.phoneNumbersReducer(df([666,777,888]), df(action));
      expect(res).toEqual(phoneNumbers);
    });
    it('shuold add phone number to list', () => {
      var phoneNumbers = [666];
      var action = {
        type: 'ADD_PHONE_NUMBER',
        phoneNumber: 666
      };
      var res = reducers.phoneNumbersReducer(df([]), df(action));
      expect(res).toEqual(phoneNumbers);
    });
  });
});
