import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: {message: 'Initial error'}
        }
        componentWillMount() {
            this.reqInterseptor = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req;
            });
            this.resInterseptor = axios.interceptors.response.use(res => res, error => {
                console.log('interceptior resp error', error.response);
                this.setState({error: error})
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterseptor);
            axios.interceptors.response.eject(this.resInterseptor);
        }

        errorConfirmedHandler = () => {
            console.log('errorConfirmedHandler');
            this.setState({error: null})
        };

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>  
            );
        }
    }
};

export default withErrorHandler;