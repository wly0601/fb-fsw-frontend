import React,{useState} from 'react'
import { Navbar, Container,Nav, Form, NavItem, NavDropdown,Button, NavLink} from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa';
import './Navigation.Module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/poppins';
import {FaBell} from 'react-icons/fa'
import {FaRegUser} from 'react-icons/fa';
import {FaListUl} from 'react-icons/fa';

const options = ["Profile", "Daftar Jual", "Log Out"];

export default function NavbarLogIn() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggling = () => setIsOpen(!isOpen);
  
    const onOptionClicked = ()=> () => {
      setIsOpen(false);
    };

       return (  
                 <Navbar className="ms-auto navbar"bg="white" expand="lg">
                    <Container fluid className='me-3'>
                    <Navbar.Brand href="#home" className='logo' ></Navbar.Brand>
                   
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Form className="d-flex test">
                            <input
                                type="search"
                                placeholder="Cari di sini..."
                                className="me-0 searchBar"
                                aria-label="Search"
                                />
                            <i className='searchIcon' type='button'><FaSearch/></i>
                        </Form>
                        <Nav className="flex-grow-1 justify-content-end nav">
                        <Nav.Link href="#link"><FaListUl className='link'/>
                        </Nav.Link>
                            <Nav.Link href="#home" >
                                <FaBell className='link'/>
                            </Nav.Link>
                          
                            <NavLink >
                                 <i type = 'button' className='button-fa' onClick={toggling}>
                                 <FaRegUser className='link'/>
                                 </i>
                                {isOpen && (
                           <div >
                            <ul >
                               {options.map(option => (
                             <NavItem onClick={onOptionClicked(option)} key={Math.random()}>
                              {option}
                            </NavItem>
                             ))}
                            </ul>
                          </div>
                                 )}
                         </NavLink>          
                        </Nav>
                    </Navbar.Collapse>
             </Container>
            </Navbar>
        )
    
}