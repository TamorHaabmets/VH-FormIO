import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-formio';
import {AppConfig} from '../../config';
import { getForm, getSubmission } from 'react-formio';

const Demographics = class  extends Component {
  render() {
    const {
      options    } = this.props;

    return (
      <div>
        <h3>New Form</h3>
        <Form
          src={"https://wauvrnyktlmhhfa.form.io/demographics"}
          options={{...{template: 'bootstrap3', iconset: 'fa'},  ...options}}
        />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
    src: AppConfig.projectUrl + '/Demographics'
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
