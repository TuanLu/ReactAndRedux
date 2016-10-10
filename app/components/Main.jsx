var React = require('react');
var Main = React.createClass({
  add: function(num1, num2) {
    return num1 + num2;
  },
  render: function() {
    return (
      <div>
        Main.jsx [Main Component Content]
        <h3>New content here</h3>
        <h4>Logo components</h4>
      </div>
    );
  }
});
module.exports = Main;
