import React, { Component } from "react";
import { Link } from 'react-router-dom';

class PatientsParse extends Component {
  constructor() {
    super();
    this.state = {
      patients: []
    };
  }
  componentDidMount() {
    console.log(this.props.match.path)
    var url ="https://wauvrnyktlmhhfa.form.io/patients/";
    fetch("https://wauvrnyktlmhhfa.form.io/patients/submission")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let forms = data.map(frm => {
          return (
            <div>
              <script>{url = url + frm._id}</script>
              <Link to={"/patients/"+frm._id} class="btn btn-primary" role="button" >{frm.data.Nimi}</Link>      
              <br/><br/>
            </div>
          );
        });
        this.setState({ forms: forms });
      });
  }

  render() {
    return (
      <div>
        <h2>Patsiendid</h2><br/>
          <div>{this.state.forms}</div>
      </div>
    );
  }
}
export default PatientsParse;
