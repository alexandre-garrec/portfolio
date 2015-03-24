var MainComponent  = React.createClass({
     mixins: [ReactFireMixin],

    getInitialState: function() {
        return {
            projects: []
       };
    },

    showModal: function(){
        this.props.setPopup("active");
    },
    componentWillMount: function() {
        this.bindAsArray(new Firebase("https://portfolioalex.firebaseio.com/projects"), "projects");
    },
    render: function() {

        console.log(this.state.projects);
        return (
            <div>
                <div  className={"part1 " + this.props.popup}>
                    <div className="contain">
                        <h1>Alexandre Garrec</h1>
                        <p>Développeur front end</p>
                        <button>Telecharger CV</button>
                    </div>
                </div>
                <div className="part2">
                    <div className="contain">
                        <div className="row">
                            <div className="grid-container">
                                <div className="col-3">
                                    <img src="https://github.com/facebook/react/wiki/react-logo-1000-transparent.png" height="300px" />
                                </div>
                                <div className="col-3"> 
                                    <h2>Poste actuel</h2>          
                                    <p>Développeur front end chez "le livre scolaire"</p>
                                    <p>Technologies utilisées :</p>
                                    <ul>
                                        <li>Less</li>
                                        <li>React</li>
                                        <li>Gulp</li>
                                        <li>Flux</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="part3">
                    <div className="contain">
                        <h2>Portfolio</h2>
                        <div className="contain">
                            <div className="grid-container">
                            <div className="row">
                                <div className="col-2">
                                    <div className="modal-img" onClick={this.showModal}><div><i className="fa fa-calendar"></i></div><img src="img/calendrier.png" /></div>
                                </div>
                                <div className="col-2">
                                    <div className="modal-img" onClick={this.showModal}><div><i className="fa fa-coffee"></i></div><img src="img/appcofee.png" /></div>
                                </div>
                                <div className="col-2">
                                    <div className="modal-img" onClick={this.showModal}><div><i className="fa fa-gamepad"></i></div><img src="img/roquet.png" /></div>
                                </div>
                                <div className="col-2">
                                    <div className="modal-img locked"><div><i className="fa fa-lock"></i></div><img src="img/calendrier.png" /></div>
                                </div>
                                <div className="col-2">
                                    <div className="modal-img locked"><div><i className="fa fa-lock"></i></div><img src="img/appcofee.png" /></div>
                                </div>
                                <div className="col-2">
                                    <div className="modal-img locked"><div><i className="fa fa-lock"></i></div><img src="img/roquet.png" /></div>
                                </div>
                                <div className="col-2">
                                    <div className="modal-img locked"><div><i className="fa fa-lock"></i></div><img src="img/calendrier.png" /></div>
                                </div>
                                <div className="col-2">
                                    <div className="modal-img locked"><div><i className="fa fa-lock"></i></div><img src="img/appcofee.png" /></div>
                                </div>
                                <div className="col-2">
                                    <div className="modal-img locked"><div><i className="fa fa-lock"></i></div><img src="img/roquet.png" /></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                </div>
                <div className="part4">
                      <div className="contain">
                        <div className="grid-container">
                        <div className="row">
                            <div className="col-2">
                                <h2>Frameworks</h2>
                                <p>React</p>
                                <p>JQuery</p>
                                <p>LESS</p>
                                <p>Zend</p>
                            </div>
                            <div className="col-2">
                                <h2>Technologies</h2>
                                <p>Gulp</p>
                                <p>NodeJs</p>
                                <p>Git</p>
                                <p>Firebase</p>
                                <p>Flux</p>
                            </div>                
                            <div className="col-2">
                                <h2>Langages</h2>
                                <p>JavaScript</p>
                                <p>C#</p>
                                <p>PHP</p>
                                <p>CSS</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="part5">
                    <div className="contain">
                        <h2>Diplomes</h2>
                        <div className="chrono">
                            <div className="chrono-left">
                                <p>BTS SIO - 2014</p>
                                <p>BAC PRO SEN - 2012</p>
                                <p>BEP SEN - 2011</p>
                                <p>Brevet des collèges - 2009</p>
                            </div>
                            <div className="chrono-right">
                                <p>ESC 8 semaines de stages de stages <br/> Mission(s) : Réalisé un site permettant la correction au- tomatique des documents EXCEL et gestion des examens. </p>

                                <p>Chocolaterie de Bourgogne 7 semaines de stages<br/> Mission(s) : Amélioration du site intranet de l’entreprise, actualisation du design et ajout d’un magasin en ligne.</p>

                                
                                <p>SERVAL INFORMATIQUE 19 semaines de stages <br/>
                                Mission(s) : Maintenance informatique, gestion de serveurs et Hotline.</p>
                              
                                <p>BUROFAX ( 4 semaines de stages ) <br/>
                                Mission(s) : Réparation et dépannage d’ordinateurs.</p>

                                <p>DEPANN COMPUTER INTERNET 4 semaines de stages <br/>Mission(s) : Réparation et dépannage d’ordinateurs.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="part8">
                     <div className="contain">

                     </div>
                </div>
                <div className="part6">
                    <div className="contain">
                        <h2>Contact</h2>

                        <input type="text" placeholder="Nom" />
                        <input type="text" placeholder="Email" />

                        <textarea placeholder="Votre message ..."></textarea>
                        <button>Envoyer</button>

                    </div>
                </div>
                <div className="part7">
                    <div className="contain">
                      <p>&copy; Alexandre Garrec</p>
                    </div>
                </div>
    </div>
        );
    }

});


module.exports = MainComponent;