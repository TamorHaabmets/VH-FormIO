import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-formio';
import {AppConfig} from '../../config';
import { getForm, getSubmission } from 'react-formio';

const Test3 = class  extends Component {
  render() {

    return (
      <div>
        <h1 class="center">Test 3 küsimustik</h1>
        <Form src={"https://wauvrnyktlmhhfa.form.io/test3"}/>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
    src: AppConfig.projectUrl + '/Test3'
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
        getForm: (id) => dispatch(getForm('questionnaire')),
        getSubmission: (id) => dispatch(getSubmission('questionnaire', id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test3)
