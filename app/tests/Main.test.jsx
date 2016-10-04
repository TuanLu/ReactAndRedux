var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUltils = require('react-addons-test-utils');
//Sample test Main component
var Main = require('Main');

describe('Main Component', () => {
  it('should exist', () => {
    expect(Main).toExist();
  });
  describe('add function', () => {
    it('should add 2 number', function() {
      var main = TestUltils.renderIntoDocument(<Main/>);
      expect(main.add(2,3)).toBe(5);
      expect(main.add(-1,5)).toBe(4);
    });
    it('should concat 2 string', function() {
      var main = TestUltils.renderIntoDocument(<Main/>);
      expect(main.add('a', 'b')).toBe('ab');
    });
  });
});
