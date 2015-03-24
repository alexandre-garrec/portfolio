var MenuComponent  = React.createClass({

    render: function() {
        return (
         <div className={"menu " + this.props.popup}>
                <div className="contain">
                    <p>Alexandre Garrec</p>

                    <ul>
                        <li>Home</li>
                        <li>Portofolio</li>
                        <li>Diplomes</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        );
    }

});

module.exports = MenuComponent;