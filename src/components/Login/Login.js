import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Container,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Button,
    InputGroup,
    InputGroupAddon,
    Alert,
    FormFeedback,
    Form, Card, CardBody, CardTitle, CardHeader
} from 'reactstrap';
import { eye, eyeOff } from 'react-icons-kit/feather';
import { Icon } from 'react-icons-kit';

import { isValidEmail, isValidPassword } from '../../lib/validations';
import { doLogIn, updateEmail, updatePassword } from '../../actions/LoginActions';

class Login extends Component {

    state = {
        showAlert: false,
        showTokenAlert: false,
        alertDismissed: false,
        formSubmitted: false,
        displayPassword: false
    };

    componentDidMount() {
        if (this.props.isLogged) {
            this.props.history.push('/me');
        } else {
            this.setState({ formSubmitted: false });
        }

        if (this.props.location.search.indexOf('token-expired') !== -1) {
            this.setState({
                showTokenAlert: true
            });
        }
    }

    isEmailInvalid() {
        return this.state.formSubmitted && !isValidEmail(this.props.email);
    }

    isPasswordInvalid() {
        return this.state.formSubmitted && !isValidPassword(this.props.password);
    }

    onInputChange(evt) {
        if (evt.target.name === 'email') {
            this.props.updateEmail(evt.target.value);
        } else {
            this.props.updatePassword(evt.target.value);
        }
    }

    onSubmitForm(evt) {
        evt.preventDefault();

        this.setState({ formSubmitted: true });
        /* eslint react/no-direct-mutation-state: 0 */
        this.state.formSubmitted = true; // forces the same update in this cycle

        if (!this.isEmailInvalid() && !this.isPasswordInvalid()) {
            this.setState({ alertDismissed: false });
            this.props.doLogIn()
                .then(() => {
                    this.props.history.push('/me');
                })
                .catch(() => {
                    this.setState({
                        showAlert: true,
                        formSubmitted: false
                    });
                });
        }
    }

    alertDismiss() {
        this.setState({
            alertDismissed: true,
            showAlert: false
        });
    }

    tokenDismiss() {
        this.setState({ showTokenAlert: false });
        this.props.history.replace('/login');
    }

    toggleDisplayPassword() {
        this.setState({
            displayPassword: !this.state.displayPassword
        });
    }

    render() {
        return (
            <Container className='login'>
                <Row>
                    <Col xs={ { size: 12 } } sm={ { size: 8, offset: 1 } } md={ { size: 6, offset: 2 } }>

                        <Card>
                            <CardHeader>
                                <CardTitle>Login</CardTitle>
                            </CardHeader>

                            <CardBody>
                                <Form onSubmit={ (evt) => {
                                    this.onSubmitForm(evt);
                                } }>

                                    <Alert color='primary' isOpen={ this.state.showTokenAlert } toggle={ () => {
                                        this.tokenDismiss();
                                    } }>
                                        Your session has expired, please log in again.
                                    </Alert>

                                    <Alert color='danger' isOpen={ this.state.showAlert } toggle={ () => {
                                        this.alertDismiss();
                                    } }>
                                        We were unable to authenticate you using this email/password combination.
                                        Please try again with a different combination.
                                    </Alert>

                                    <FormGroup>
                                        <Label for='email'>Email Address</Label>
                                        <Input
                                            type='email'
                                            name='email'
                                            value={ this.props.email }
                                            onChange={ (ev) => {
                                                this.onInputChange(ev);
                                            } }
                                            invalid={ this.isEmailInvalid() }
                                        />
                                        <FormFeedback>Please enter a valid email address.</FormFeedback>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for='password'>Password</Label>
                                        <InputGroup>
                                            <Input
                                                type={ this.state.displayPassword ? 'text' : 'password' }
                                                name='password'
                                                value={ this.props.password }
                                                onChange={ (ev) => {
                                                    this.onInputChange(ev);
                                                } }
                                                invalid={ this.isPasswordInvalid() }
                                            />
                                            <InputGroupAddon addonType='append'>
                                                <Button onClick={ () => {
                                                    this.toggleDisplayPassword();
                                                } }>
                                                    { this.state.displayPassword ? <Icon icon={ eyeOff }/> :
                                                        <Icon icon={ eye }/> }
                                                </Button>
                                            </InputGroupAddon>
                                            <FormFeedback>Please fill both email and password.</FormFeedback>
                                        </InputGroup>
                                    </FormGroup>

                                    <FormGroup>
                                        <Button type='submit' block>Login</Button>
                                    </FormGroup>

                                    <FormGroup>
                                        <Link to='/register' className='text-center block'>Register an Account</Link>
                                    </FormGroup>

                                </Form>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </Container>
        );
    }

}

export default withRouter(
    connect(
        (state) => ({
            isLogged: state.session.isLogged,
            email: state.login.email,
            password: state.login.password
        }),
        { updateEmail, updatePassword, doLogIn }
    )(Login)
);
