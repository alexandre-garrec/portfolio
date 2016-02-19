/*
* 
* Copyright (c) 2015  All rights reserved.
*
*/

// Datas
var data              = require('../data');

// Components
var ProjectsComponent = require("./ProjectsComponent.jsx");
var SkillsComponent   = require("./SkillsComponent.jsx");
var FooterComponent   = require("./FooterComponent.jsx");

// Mixins
var Navigation        = require("react-router").Navigation;


var MainComponent  = React.createClass({

    /************************************ INITIALIZATION ***********************************/

    mixins: [ Navigation ],

    /**************************************** RENDER ***************************************/

    render: function() {

        return (
            <div>
                <div  className="Head">
                    <div className="contain">
                        <h1>{data.name}</h1>
                        <p>{data.about}</p>
                        {/*<button>Telecharger CV</button>*/}
                        <div className="button_warpper">
                            <a href={data.github.url} ><i className="fa fa-github"></i></a>
                            <a href={data.linkedin.url} ><i className="fa fa-linkedin-square"></i></a>
                        </div>
                    </div>
                </div>

                {/*
                <div className="About_me">
                    <div className="contain">
                        <div className="row">
                            <div className="grid-container">
                                <h2>Poste actuel</h2>
                                <p>Développeur front end chez Lelivrescolaire.fr</p>
                            </div>
                        </div>
                    </div>
                </div>
                */}
               
                <SkillsComponent />
                <FooterComponent />
            </div>
        );
    },

    /********************************* COMPONENT LIFECYCLE *********************************/

    /************************************ CUSTOM METHODS ***********************************/



});

module.exports = MainComponent;