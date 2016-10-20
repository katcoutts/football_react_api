var React = require("react");

var PlayerSelector = require('./PlayerSelector')
var PlayerDetail = require('./PlayerDetail');

var PlayerBox = React.createClass({

  getInitialState: function() {
    return {
      players: [],
      focusPlayer: null,
    }
  },

  componentWillReceiveProps: function(nextProps){
    console.log("componentwillreceiveprops")
    this.makeRequest(nextProps.url);
  },

  makeRequest: function(url){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.setRequestHeader("X-AUTH-TOKEN", "4937a8b3e8d34d3f94fd8b8e4f73b4b9");
    request.onload = function() {
      var data = JSON.parse( request.responseText );
      this.setState({ players: data.players })
    }.bind(this);
    request.send();
  },

  componentDidMount: function() {
    this.makeRequest(this.props.url);
  },

  setFocusPlayer: function(index){
    this.setState({
      focusPlayer: this.state.players[index]
    })
  },

  render: function() {
    return (
      <div>
        <PlayerSelector 
          players={this.state.players} 
          selectPlayer={this.setFocusPlayer}/>
        <PlayerDetail player={this.state.focusPlayer}/>
      </div>
    )
  }

})

module.exports = PlayerBox;