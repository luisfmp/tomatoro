import React, { Component } from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle, Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler, NavItem, NavLink,
    UncontrolledDropdown
} from 'reactstrap';
import { connect } from 'react-redux';

import { Icon } from 'react-icons-kit';
import { chevronDown } from 'react-icons-kit/feather';
import { cleanSession } from '../../actions/SessionActions';

class TopNav extends Component {

    state = {
        isNavbarOpen: false
    };

    toggleNavbar() {
        this.setState({ isNavbarOpen: !this.state.isNavbarOpen });
    }

    getUserMenu() {
        return (
            <UncontrolledDropdown nav inNavbar key={ 1 }>
                <DropdownToggle nav>
                    { this.props.email }
                    <Icon icon={ chevronDown }/>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        Settings
                    </DropdownItem>
                    <DropdownItem onClick={ () => {
                        this.props.cleanSession();
                    } }>
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    render() {

        let rightItems;

        if (this.props.isLogged) {
            rightItems = [ this.getUserMenu() ]
        } else {
            rightItems = (
                <NavItem>
                    <NavLink href='/login'>Login</NavLink>
                </NavItem>
            );
        }

        return (
            <header>
                <Navbar expand='md'>
                    <NavbarBrand href='/'>
                        <img src='./svg/logo-tomatoro.svg' alt='logo' height='30'/>
                    </NavbarBrand>

                    <NavbarToggler onClick={ () => {
                        this.toggleNavbar();
                    } }/>

                    <Collapse navbar isOpen={ this.state.isNavbarOpen }>
                        <Nav navbar className='ml-auto'>
                            <NavItem>
                                <NavLink href='#how-it-works'>How It Works</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#contact'>Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='!#'>SoftwareDevTools</NavLink>
                            </NavItem>

                            { rightItems }
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }

}

export default connect(
    (state) => ({
        email: state.session.user.email,
        isLogged: state.session.isLogged
    }),
    { cleanSession }
)(TopNav);
