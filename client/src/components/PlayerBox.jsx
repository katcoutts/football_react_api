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