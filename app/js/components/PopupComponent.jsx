var PopupComponent = React.createClass({
    getInitialState: function() {
        return {
            active: ""
       };
    },
    Close:function(){

        this.props.setPopup("");

    },
    render: function() {
        return (
            <div className={"popup "  + this.props.popup}>

                <div className="contain">
                    <i onClick={this.Close}  className="fa fa-times"></i>
                    <br/>
                    <h2>Test</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ex laudantium aliquid tempore fugit facere! Possimus nam temporibus asperiores, commodi perspiciatis, officia aut similique, fugiat iusto voluptatibus soluta nemo quas?</p>
                </div>
            </div>
        );
    }

});

module.exports = PopupComponent;