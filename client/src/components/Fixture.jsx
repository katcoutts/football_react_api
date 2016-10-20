var React = require('react');

var Fixture = function(props){

  var homeTeamScore = props.fixture['result'].goalsHomeTeam;
  var awayTeamScore = props.fixture['result'].goalsAwayTeam;
  var date = props.fixture.date;
  var shortDates = date.split("T");
  var newDate = shortDates[0];



  if(homeTeamScore === undefined){
    homeTeamScore = " ";
  }

  if(awayTeamScore === undefined){
    awayTeamScore = " ";
  }

  return(
    <div className='fixture-row'>
    <h4>Date: {newDate}</h4>
     <h4>Home Team: {props.fixture.homeTeamName} {homeTeamScore} </h4>
     <h4>Away Team:  {props.fixture.awayTeamName} {awayTeamScore} </h4>

    </div>
  )


}

module.exports = Fixture;