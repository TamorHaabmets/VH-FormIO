import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-formio';
import { push } from 'connected-react-router'
import {AppConfig, AuthConfig} from '../../config';
import { setUser } from 'react-formio';

const Demographics = class  extends Component {
  render() {
    const {
      submission,
      hideComponents,
      onSubmit,
      options,
      form: {form, isActive, url}
    } = this.props;

    return (
      <div>
        <h3>New { form.title }</h3>
        <Form
          form={form}
          submission={submission}
          url={url}
          options={options}
          hideComponents={hideComponents}
          onSubmit={onSubmit}
        />
      </div>
    );
  }
}

// const mapStateToProps = () => {
//   return {
//     src: AppConfig.projectUrl + '/Demographics'
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//         getForm: (id) => dispatch(getForm('demographics')),
//         getSubmission: (id) => dispatch(getSubmission('demographics', id))
//   };
// }

export default connect(
//   mapStateToProps,
//   mapDispatchToProps
)(Demographics)
