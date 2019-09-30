import React, {Component} from 'react';

export default class Hero extends Component {
  render() {
    return (
      <div className="jumbotron text-center" style={{'marginTop': '-40px'}}>
        <h2 className="title">
          Tere tulemast &lt;
          <span className="text-blue">Viljandi</span>
          <span className="text-green">haigla</span>
          &gt; küsimustike süsteemi!
        </h2>
       
        <div className="row">
          <div className="col-sm-12 col-sm-offset-3 text-center">
            <p className="lead">
              Tagasiside küsimine teeb nüüd kannapöörde!
            </p>
            <p className="lead">Vajad abi?</p>
            <ul className="list-inline">
              <li>
                <a className="btn btn-lg btn-success" target="_blank" rel="noopener noreferrer" href="https://github.com/formio/react-formio">GIT</a>
              </li>
              <li>
                <a className="btn btn-lg btn-success" target="_blank" rel="noopener noreferrer" href="http://help.form.io">Dokumentatsioon</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
