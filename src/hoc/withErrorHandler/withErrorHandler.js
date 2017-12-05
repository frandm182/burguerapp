import React, { Component } from 'react';

import AuxHoc from '../../hoc/AuxHoc/AuxHoc';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) =>
  class extends Component {
    state = { error: null };
    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error });
        }
      );
    }

    errorConfirmedHandler = () => this.setState({ error: null });

    render() {
      const { error } = this.state;
      return (
        <AuxHoc>
          <Modal show={error} closeModal={this.errorConfirmedHandler}>
            {error ? error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </AuxHoc>
      );
    }
  };
export default withErrorHandler;
