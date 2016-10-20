var React = require('react');
var FixtureList = require('./FixtureList.jsx')

var FixtureBox = React.createClass({

  getInitialState: function(){
    return {
      fixtures: []
    }
  },


  componentWillReceiveProps: function(nextProps){
    console.log("fixture componentwillreceiveprops")
    this.makeRequest(nextProps.url);
  },

  makeRequest: function(url){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      this.setState({ fixtures: data.fixtures })
    }.bind(this);
    request.send();
  },

  componentDidMount: function() {
    this.makeRequest(this.props.url);
  },


  render: function(){
  return (
    <div>
      <h2>Fixtures</h2>
      <FixtureList fixtures={this.state.fixtures}/>
    </div>
    )
  }

})

module.exports = FixtureBox;