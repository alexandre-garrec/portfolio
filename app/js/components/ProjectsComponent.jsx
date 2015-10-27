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
            <div className="col-2">
                <div className={"Thubmail " + (n.image.length ? "" : "Locked")} onClick={ n.image.length ? _.bind(self._showModal , self , n.id) : null }>
                    <div>
                        <i className={"fa " + n.ico}></i>
                        <p className="title">{n.title}</p>
                    </div>
                    <img src={n.image} />
                </div>
            </div>
        );
    },

    /********************************* COMPONENT LIFECYCLE *********************************/

    /************************************ CUSTOM METHODS ***********************************/

    _showModal: function(id){
         this.transitionTo('/projects/'+id);
    },

});

module.exports = ProjectsComponent;