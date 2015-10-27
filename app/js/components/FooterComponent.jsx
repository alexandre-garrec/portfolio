/*
* 
* Copyright (c) 2015 All rights reserved.
*
*/

var FooterComponent = React.createClass({
    
    /************************************ INITIALIZATION ***********************************/

    /**************************************** RENDER ***************************************/

    render: function() {
        return (
            <div>
                <div className="Separator">
                     <div className="contain">
                     </div>
                </div>
                <div className="Footer">
                    <div className="contain">
                      <p>&copy; Alexandre Garrec</p>
                    </div>
                </div>
            </div>
        );
    },

    /********************************* COMPONENT LIFECYCLE *********************************/

    /************************************ CUSTOM METHODS ***********************************/

});

module.exports = FooterComponent;