var React = require('react');
var TeamSelector = require('./TeamSelector.jsx');
var TeamDetail = require('./TeamDetail.jsx');

var TeamBox = React.createClass({

  getInitialState: function() {
    return { 
      teams: [], 
      focusTeam: null,
      url: "http://api.football-data.org/v1/competitions/398/teams",
      key: "4937a8b3e8d34d3f94fd8b8e4f73b4b9" }
  },

  componentDidMount: function() {
    var request = new XMLHttpRequest();
    request.open('GET', this.state.url);
    request.setRequestHeader("X-AUTH-TOKEN", this.state.key);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      this.setState({ teams: data.teams })
    }.bind(this);
    request.send();
  },

  setFocusTeam: function( index ) {
    this.setState({ focusTeam: this.state.teams[index] })
  },

  render: function() {
    return (
      <div>
        <h2>Football!!!</h2>
        <TeamSelector 
          teams={this.state.teams} 
          selectTeam={this.setFocusTeam} />
        <TeamDetail
          team={this.state.focusTeam} />
      </div>
    )
  }

})

module.exports = TeamBox;