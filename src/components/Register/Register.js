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
    Alert,
    FormFeedback,
    Form, Card, CardHeader, CardTitle, CardBody
} from 'reactstrap';
import { isValidEmail, isValidPassword } from '../../lib/validations';
import { clearInformation, doRegister, updateInformation } from '../../actions/RegisterActions';

class Register extends Component {

    state = {
        showAlert: false,
        alertDismissed: false,
        formSubmitted: false,
        displayPassword: false,
        termsAccepted: false,
        confirmPassword: ''
    };

    static getDerivedStateFromProps(props, currentState) {
        if (props.errorMessage && !currentState.alertDismissed) {
            return {
                showAlert: true
            };
        }
        return null;
    }

    componentDidMount() {
        if (this.props.isLogged) {
            this.props.history.push('/dashboard');
        } else {
            this.setState({ formSubmitted: false });
        }
    }

    isInvalidField(value) {
        return this.state.formSubmitted && !value;
    }

    isEmailInvalid() {
        return this.state.formSubmitted && !isValidEmail(this.props.form.email);
    }

    isPasswordInvalid() {
        return this.state.formSubmitted && !isValidPassword(this.props.form.password);
    }

    isConfirmPasswordInvalid() {
        return this.state.formSubmitted && this.props.form.password !== this.state.confirmPassword;
    }

    onInputChange(evt) {
        const newInformation = { ...this.props.form };
        newInformation[ evt.target.name ] = evt.target.value;
        this.props.updateInformation(newInformation);
    }

    onSubmitForm(evt) {
        evt.preventDefault();

        this.setState({ formSubmitted: true });
        /* eslint react/no-direct-mutation-state: 0 */
        this.state.formSubmitted = true; // forces the same update in this cycle

        if (!this.isInvalidField(this.props.form.firstName) &&
            !this.isInvalidField(this.props.form.lastName) &&
            !this.isEmailInvalid() &&
            !this.isPasswordInvalid() &&
            !this.isConfirmPasswordInvalid()) {
            this.setState({ alertDismissed: false });
            this.props.doRegister()
                .then(() => {
                    this.props.history.push('/login');
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

    render() {
        return (
            <Container className='login register'>
                <Row>
                    <Col xs={ { size: 12 } } sm={ { size: 8, offset: 1 } } md={ { size: 6, offset: 2 } }>

                        <Card>
                            <CardHeader>
                                <CardTitle>Register</CardTitle>
                            </CardHeader>

                            <CardBody>
                                <Form onSubmit={ (evt) => {
                                    this.onSubmitForm(evt);
                                } }>

                                    <Alert color='danger' isOpen={ this.state.showAlert } toggle={ () => {
                                        this.alertDismiss();
                                    } }>
                                        There is an error trying to register this user.
                                        Please try again with a different combination.
                                    </Alert>

                                    <FormGroup>
                                        <Label for='firstName'>First Name</Label>
                                        <Input
                                            type='text'
                                            name='firstName'
                                            value={ this.props.form.firstName }
                                            onChange={ (ev) => {
                                                this.onInputChange(ev);
                                            } }
                                            invalid={ this.isInvalidField(this.props.form.firstName) }
                                        />
                                        <FormFeedback>Please fill this field.</FormFeedback>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for='lastName'>Last Name</Label>
                                        <Input
                                            type='text'
                                            name='lastName'
                                            value={ this.props.form.lastName }
                                            onChange={ (ev) => {
                                                this.onInputChange(ev);
                                            } }
                                            invalid={ this.isInvalidField(this.props.form.lastName) }
                                        />
                                        <FormFeedback>Please fill this field.</FormFeedback>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for='email'>Email Address</Label>
                                        <Input
                                            type='email'
                                            name='email'
                                            value={ this.props.form.email }
                                            onChange={ (ev) => {
                                                this.onInputChange(ev);
                                            } }
                                            invalid={ this.isEmailInvalid() }
                                        />
                                        <FormFeedback>Please enter a valid email address.</FormFeedback>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for='password'>Password</Label>
                                        <Input
                                            type={ this.state.displayPassword ? 'text' : 'password' }
                                            name='password'
                                            value={ this.props.form.password }
                                            onChange={ (ev) => {
                                                this.onInputChange(ev);
                                            } }
                                            invalid={ this.isPasswordInvalid() }
                                        />
                                        <FormFeedback>Please fill both email and password.</FormFeedback>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for='confirm-password'>Confirm Password</Label>
                                        <Input
                                            type='password'
                                            name='confirm-password'
                                            value={ this.state.confirmPassword }
                                            onChange={ (ev) => {
                                                this.setState({ confirmPassword: ev.target.value });
                                            } }
                                            invalid={ this.isConfirmPasswordInvalid() }
                                        />
                                        <FormFeedback>Please type the same password.</FormFeedback>
                                    </FormGroup>

                                    <Button type='submit' block>Register</Button>
                                    <Link to='/login' className='text-center block'>Login Page</Link>

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
            form: state.register.form
        }),
        { updateInformation, clearInformation, doRegister }
    )(Register)
);
