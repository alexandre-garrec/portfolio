window.React = require('react');
window.Firebase = require('firebase');

var MainComponent = require('./components/MainComponent.jsx');
var MenuComponent = require('./components/MenuComponent.jsx');
var PopupComponent = require('./components/PopupComponent.jsx');



var App = React.createClass({

    getInitialState: function() {
        return {
            activePopup: ""
       };
    },

    setActvePopup: function(txt){
        this.setState({activePopup:txt});
    },
  render: function() {
    return (
      <div>
        <PopupComponent setPopup={this.setActvePopup} popup={this.state.activePopup}/>
        <MenuComponent popup={this.state.activePopup}/>
        <MainComponent popup={this.state.activePopup} setPopup={this.setActvePopup}/>
      </div>
    );
  }
});



module.exports = App;


React.render(<App />, document.getElementById('main-js'));