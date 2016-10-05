var expect = require('expect');
var reducers = require('reducers');
describe('Test Reducer', () => {
  describe('nameReducer', () => {
    it('shuold change name properly', () => {
      var action = {
        type: 'CHANGE_NAME',
        name: 'Tuan Lu Duc'
      };
      var res = reducers.nameReducer('', action);
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
      var res = reducers.iosDevicesReducer([], action);
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
      var res = reducers.iosDevicesReducer(defaultDevices, action);
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
      var res = reducers.iosDevicesReducer(devices, action);
      expect(res).toEqual(expectedResult);
      var action = {
        type: 'REMOVE_IOS_DEVICE',
        iosId: 5
      };
      var res = reducers.iosDevicesReducer(devices, action);
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
      var res = reducers.phoneNumbersReducer([666,777,888], action);
      expect(res).toEqual(phoneNumbers);
    });
    it('shuold add phone number to list', () => {
      var phoneNumbers = [666];
      var action = {
        type: 'ADD_PHONE_NUMBER',
        phoneNumber: 666
      };
      var res = reducers.phoneNumbersReducer([], action);
      expect(res).toEqual(phoneNumbers);
    });
  });
});
