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
    request.setRequestHeader("X-AUTH-TOKEN", "4937a8b3e8d34d3f94fd8b8e4f73b4b9");
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
      <FixtureList fixtures={this.state.fixtures}/>
    </div>
    )
  }

})

module.exports = FixtureBox;