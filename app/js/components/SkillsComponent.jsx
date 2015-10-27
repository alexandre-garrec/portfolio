/*
* 
* Copyright (c) 2015 All rights reserved.
*
*/

// Data
var data = require('../data');

var SkillsComponent = React.createClass({

    /************************************ INITIALIZATION ***********************************/
    
    /**************************************** RENDER ***************************************/

    render: function() {

        var skills = {
            frameworks   : _.map(data.competenses.frameworks ,    this._displaySkill ),
            technologies : _.map(data.competenses.technologies ,  this._displaySkill ),
            langages     : _.map(data.competenses.langages ,      this._displaySkill )
        }

        return (
            <div className="Skills">
                  <div className="contain">
                    <div className="grid-container">
                    <div className="row">
                        <div className="col-2">
                            <h2>Frameworks</h2>
                            {skills.frameworks}
                        </div>
                        <div className="col-2">
                            <h2>Technologies</h2>
                            {skills.technologies}
                        </div>                
                        <div className="col-2">
                            <h2>Langages</h2>
                            {skills.langages}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    },

    /*************************************** DISPLAY ***************************************/

    _displaySkill : function (n) {
        return (<p>{n}</p>)
    },

    /********************************* COMPONENT LIFECYCLE *********************************/

    /************************************ CUSTOM METHODS ***********************************/

});

module.exports = SkillsComponent;