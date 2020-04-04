import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    // NavbarText
} from 'reactstrap';

function Navigation() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md" >
                <NavbarBrand className="text-white" href="/">Mini Projects</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/Home" className="text-white" >Home</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="text-white" >
                                Project List
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Calculator</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Tic Tac Toe</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Option 2</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/components/" className="text-white" >About</NavLink>
                        </NavItem>
                    </Nav>
                    {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation
