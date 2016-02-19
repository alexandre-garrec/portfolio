/*
* 
* Copyright (c) 2015 All rights reserved.
*
*/

// Datas
var data              = require('../data');

// Mixins
var Navigation   = require("react-router").Navigation;

var MenuComponent  = React.createClass({

    /************************************ INITIALIZATION ***********************************/
    
    mixins: [ Navigation ],

    /**************************************** RENDER ***************************************/

    render: function() {
        return (
         <div className={"Menu"}>
                <div className="contain">
                    <a href='#/'><p>{data.name}</p></a>
                    <ul>
                        <a href='#/'><li>Home</li></a>
                        <a href='#/projects' ><li>Portfolio</li></a>
                        <a href='#/about' ><li>About</li></a>
                    </ul>
                </div>
            </div>
        );
    },

    /********************************* COMPONENT LIFECYCLE *********************************/

    /************************************ CUSTOM METHODS ***********************************/

});

module.exports = MenuComponent;