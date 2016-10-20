var React = require("react");
var PlayerBox = require("./PlayerBox.jsx");
var FixtureBox = require("./FixtureBox.jsx")

var TeamDetail = function( props ) {
  if( !props.team ){
    return <h3>Select a team</h3>
  }

  return (
    <div>
    <h2>{props.team.name}</h2>
    <img src={props.team.crestUrl} width="100"/>
    <ul>
      <li>Squad market value: {props.team.squadMarketValue}</li>
    </ul>
    <PlayerBox url={props.team['_links'].players.href}/>
    <FixtureBox url={props.team['_links'].fixtures.href}/>
    </div>
  )
}

module.exports = TeamDetail;