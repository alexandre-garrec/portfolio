// Global
window.React            = require('react');
window._                = require('lodash');

// Components
var MainComponent       = require('./components/MainComponent.jsx');
var MenuComponent       = require('./components/MenuComponent.jsx');
var ProjectComponent    = require('./components/ProjectComponent.jsx');
var ProjectsComponent   = require('./components/ProjectsComponent.jsx');
var AboutComponent      = require('./components/AboutComponent.jsx');

// Router
var Router              = require('react-router');
var Route               = Router.Route;
var Handler             = Router.RouteHandler;
var DefaultRoute        = Router.DefaultRoute;


// Default components
var App = React.createClass({
    render: function () {
        return (
            <div>
                <MenuComponent/>
                <Handler/>
            </div>
        );
    }
});


// Routes
var routes = (
    <Route path="/" handler={App}>
    
        <DefaultRoute handler={MainComponent} />

        <Route path="projects"      name="projects" handler={ProjectsComponent} />
        <Route path="about"         name="about"    handler={AboutComponent} />
        <Route path="projects/:id"  name="project"  handler={ProjectComponent} />
    </Route>
);

require('prerender-node').shouldShowPrerenderedPage = function(){ return true }

require('prerender-node').set('prerenderToken', 'sRGHUJBcewSL4dnRd9vW')

// Router run
Router.run(routes , function (Handler) {
    React.render(<Handler />, document.getElementById('main-js'));
});


module.exports = App;