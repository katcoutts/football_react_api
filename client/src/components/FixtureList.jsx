var React = require('react');
var Fixture = require('./Fixture.jsx')


var FixtureList = function(props){

  var results = [];
  var fixtures = [];

  for (var fixture of props.fixtures){
    if (fixture.status === "FINISHED"){
      results.push(fixture);
    }
    else {
      fixtures.push(fixture)
    }
  };

  var fixtureNodes = fixtures.map(function(fixture, index) {
    return (
      <li key={index}>
        <Fixture fixture={fixture}/>
      </li>
    )
  })

  var resultNodes = results.map(function(fixture, index) {
    return (
      <li key={index}>
        <Fixture fixture={fixture}/>
      </li>
    )
  })

  return(
    <div className='fixture-list'>
      <h2>Results</h2>
      <ul>
        {resultNodes}
      </ul> 
      <h2>Fixtures</h2>
      <ul>
        {fixtureNodes}
      </ul>
    </div>
  )

}

module.exports = FixtureList;