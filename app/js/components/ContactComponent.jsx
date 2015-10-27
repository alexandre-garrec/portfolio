/*
* 
* Copyright (c) 2015 All rights reserved.
*
*/

var ContactComponent = React.createClass({
    
    /************************************ INITIALIZATION ***********************************/

    /**************************************** RENDER ***************************************/

    render: function() {
        return (
            <div className="part6">
                <div className="contain">
                    <h2>Contact</h2>

                    <input type="text" placeholder="Nom" />
                    <input type="text" placeholder="Email" />

                    <textarea placeholder="Votre message ..."></textarea>
                    <button>Envoyer</button>

                </div>
            </div>
        );
    },

    /********************************* COMPONENT LIFECYCLE *********************************/

    /************************************ CUSTOM METHODS ***********************************/

});

module.exports = ContactComponent;