var React = require('react');

var PlayerDetail = function(props){

  if (!props.player){
    return <h5>No player selected </h5>
  }

  var marketValue = props.player.marketValue;

  if(!marketValue){
    marketValue = "Priceless"
  }

  return (
    <div>
    <h3>{props.player.name}</h3>
    <ul>     
      <li>Position: {props.player.position}</li>
      <li>Squad Number: {props.player.jerseyNumber}</li>
      <li>Nationality: {props.player.nationality}</li>
      <li>Market Value: {marketValue}</li>
    </ul>
    </div>
    )


}

module.exports = PlayerDetail;