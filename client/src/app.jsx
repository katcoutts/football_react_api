var React = require('react');
var ReactDOM = require('react-dom');

var TeamBox = require('./components/TeamBox')

window.onload = function(){
  ReactDOM.render(
    <TeamBox />,
    document.getElementById('app')
  );
}
