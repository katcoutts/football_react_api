var React = require("react");

var TeamSelector = React.createClass({

  handleChange: function(event){
    var newIndex = event.target.value;
    this.props.selectTeam(newIndex);
  },

  render: function(){
    var options = this.props.teams.map(function(team, index){
      return <option key={index} value={index}>{team.name}</option>
    })

    return (     
      <select id="teams" onChange={this.handleChange}>
        <option selected disabled>Choose a team...</option>
        {options}
      </select>
    )
  }
})

module.exports = TeamSelector