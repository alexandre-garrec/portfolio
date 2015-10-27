/*
* 
* Copyright (c) 2015  All rights reserved.
*
*/

// Datas
var data        = require('../data');

// Utils
var request     = require('superagent');
var marked      = require('marked');

var ProjectComponent = React.createClass({

    /************************************ INITIALIZATION ***********************************/

    getInitialState: function() {
        return {
            project : null,
            readme : null
       };
    },
    
    /**************************************** RENDER ***************************************/

    render: function() {

        if (!this.state.project) return <div/>;

        var self        = this;
        var content     = this.state.project.repoName ? this._displayReadMe() : this._displayDescription();

        return (
            <div className={"Project"}>
                <div className="contain">
                    <img src={this.state.project.image} />
                    {content}
                </div>
            </div>
        );
    },

    _displayReadMe : function () {

        return (
            <div className="Markdown" dangerouslySetInnerHTML={this._rawMarkup()} />
        );
    },

    _displayDescription : function () {

        var technos  = this.state.project.techno ? this._displayTechno() : null;

        return (
           <div>
                <h2>{this.state.project.title}</h2>
                <p>{this.state.project.description}</p>
                {technos}
            </div>
        );
    },

    _displayTechno : function () {

        var technos  = _.map(this.state.project.techno , function (n) { return (<li>{n}</li>); });

        return (
            <div>
                <h3>Technonogie utilier</h3>
                <ul>
                    {technos}
                </ul>
            </div>
        );
    },

    /********************************* COMPONENT LIFECYCLE *********************************/

    componentWillMount: function() {
        var self = this;

        var item = _.find(data.projects , function(n) { return n.id == self.props.params.id; });

        if (item.repoName) this._getReadMe(item.repoName);

        this.setState({ project : item });
    },

    /************************************ CUSTOM METHODS ***********************************/

    _rawMarkup: function() {
        if (this.state.readme) return { __html: marked(this.state.readme, {sanitize: true}) };
        return { __html: "" };
    },

    _getReadMe : function (repo) {
        var self = this;

        request
            .get("https://raw.githubusercontent.com/" + data.github.userName + "/" + repo + "/master/README.md")
            .end(function(err, res){
                self.setState({readme : res.text})
            });
    }

});

module.exports = ProjectComponent;