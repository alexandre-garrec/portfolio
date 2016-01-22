/*
* 
* Copyright (c) 2015 All rights reserved.
*
*/

// Datas
var data            = require('../data');

// Components
var FooterComponent = require("./FooterComponent.jsx");

// Mixins
var Navigation      = require("react-router").Navigation;


var ProjectsComponent = React.createClass({

    /************************************ INITIALIZATION ***********************************/

    mixins: [ Navigation ],

    /**************************************** RENDER ***************************************/

    render: function() {

        var projets = _.map(data.projects , this._displayProject );

        return (
            <div>
                <div className="Projects">
                    <div className="contain">
                        <h2>Portfolio</h2>
                        <div className="contain">
                            <div className="grid-container">
                                <div className="row">
                                    {projets}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FooterComponent />

            </div>
        );
    },

    /*************************************** DISPLAY ***************************************/

    _displayProject : function (n) {
        var self = this;

        return (
            <a href={n.title != "Locked" ? ("#/projects/" + n.id) : null}>
                <div className="col-2">
                    <div className={"Thubmail " + (n.image.length ? "" : "Locked")} >
                        <div>
                            <i className={"fa " + n.ico}></i>
                            <p className="title">{n.title}</p>
                        </div>
                        <img src={n.image} />
                    </div>
                </div>
            </a>
        );
    },

    /********************************* COMPONENT LIFECYCLE *********************************/

    /************************************ CUSTOM METHODS ***********************************/

});

module.exports = ProjectsComponent;