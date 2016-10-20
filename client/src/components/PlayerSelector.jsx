var React = require("react");

var PlayerSelector = React.createClass({

  handleChange: function(event){
    var newIndex = event.target.value;
    this.props.selectPlayer(newIndex);
  },

  render: function(){
    var options = this.props.players.map(function(player, index){
      return <option key={index} value={index}>{player.name}</option>
    })

    return (     
      <select id="players" onChange={this.handleChange}>
        <option selected disabled>Choose a player...</option>
        {options}
      </select>
    )
  }
})

module.exports = PlayerSelector