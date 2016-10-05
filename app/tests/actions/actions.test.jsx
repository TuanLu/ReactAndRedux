var expect = require('expect');
var actions = require('actions');
describe('Redux Actions', () => {
  it('should generate changeName action', () => {
    var action = {
      type: 'CHANGE_NAME',
      name: 'Lu Tuan'
    };
    var res = actions.changeName('Lu Tuan');
    expect(action).toEqual(res);
  });
  it('should generate addPhoneNumber action', () => {
    var action = {
      type: 'ADD_PHONE_NUMBER',
      phoneNumber: 888666
    };
    var res = actions.addPhoneNumber(888666);
    expect(action).toEqual(res);
  });
  it('should generate uploadPhoto action', () => {
    var action = {
      type: 'UPLOAD_PHOTO',
      url: 'my_photo_url'
    };
    var res = actions.uploadPhoto('my_photo_url');
    expect(action).toEqual(res);
  });
});
