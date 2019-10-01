import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-formio';
import {AppConfig} from '../../config';
import { getForm, getSubmission } from 'react-formio';

const Demographics = class  extends Component {
  render() {

    return (
      <div>
        <h1 class="center">Paik 1 küsimustik</h1>
        <Form src={"https://wauvrnyktlmhhfa.form.io/paik1"}/>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
    src: AppConfig.projectUrl + '/Paik1'
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
        getForm: (id) => dispatch(getForm('demographics')),
        getSubmission: (id) => dispatch(getSubmission('demographics', id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demographics)
