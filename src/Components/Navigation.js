import React, { useState } from 'react'
import { Link } from "react-router-dom";
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
                <Link to="/"><NavbarBrand className="text-white" href="/">Mini Projects</NavbarBrand></Link>
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
                                <Link to="/calculator"><DropdownItem>Calculator</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/calculator"><DropdownItem>Tic Tac Toe</DropdownItem></Link>
                                {/* <DropdownItem divider />
                                <DropdownItem>Option 2</DropdownItem> */}
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
