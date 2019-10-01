import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Patient extends Component {
  constructor() {
    super();
    this.state = {
      p: []
    };
  }
  componentDidMount() {
    fetch(
      "https://wauvrnyktlmhhfa.form.io/patients/submission/" +
        this.props.match.params.id
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        let forms = Object.keys(data.data).map(key => {
          if (key!=="submit") {
            return (
              <h3>
                <p>
                  {key} : {data.data[key]}
                </p>
              </h3>
            );
          }
          
        });

        this.setState({ p: forms });
      });
  }
  render() {
    return <div>
    {this.state.p}
    <Link to={"../"} class="btn btn-secondary" role="button">Tagasi</Link>
    <Link to={"../../form/"} class="btn btn-primary" role="button">Kinnita</Link>
    </div>;
  }
}

export default Patient;
