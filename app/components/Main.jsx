var React = require('react');
var Main = React.createClass({
  add: function(num1, num2) {
    return num1 + num2;
  },
  render: function() {
    return (
      <div>
        Main.jsx [Main Component Content]
      </div>
    );
  }
});
module.exports = Main;
