import { NavLink, Outlet } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
                <Container>
                    <Navbar.Brand><NavLink to="/" className='Logo' style={{textDecoration: "none", color: "#fff"}} > Valorant </NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink style={({ isActive }) => ({ color: isActive ? "#FC4655" : "#fff" })}
                                to="/" className='nav-link'> Home </NavLink>
                            <NavLink style={({ isActive }) => ({ color: isActive ? "#FC4655" : "#fff" })}
                                to="agents" className='nav-link'> Agents </NavLink>
                            <NavLink style={({ isActive }) => ({ color: isActive ? "#FC4655" : "#fff" })}
                                to="weapons" className='nav-link'> Weapons </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default Header


