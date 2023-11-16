import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import About from './About';
import Home from './Home';
import AppContainer from "./AppContainer";
import logo from '../../img/logo.png'
import Profile from "./Profile";
import Business from "../registers/business/Business";
import User from "../admin/user/User";
import Group from "../admin/group/Group";
import Rule from "../admin/rule/Rule";
import FunctionalitySearch from "../admin/functionality/FunctionalitySearch";
import FunctionalityCreate from "../admin/functionality/FunctionalityCreate";
import FunctionalityEdit from "../admin/functionality/FunctionalityEdit";
import FunctionalityDetail from "../admin/functionality/FunctionalityDetail";


function AppNavbar(props) {

  var fontMenuItemSize = '13px';
  var fontNavBar = '15px';
  const userLooged = () => {
    return JSON.parse(window.localStorage.getItem("userLogged")); 
  }

  return (
    <Router>
      <div>
        <Navbar bg="dark" expand="lg" variant={"dark"} style={{fontSize : fontNavBar}}>
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt='AML' width="30" height="30" className="d-inline-block align-top" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="me-auto" >
                <NavDropdown title="Registros" id="basic-nav-dropdown" >
                  <NavDropdown.Item href="/registers/business" style={{fontSize : fontMenuItemSize}}>Business</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Administrator" id="basic-nav-dropdown" >
                  <NavDropdown.Item href="/admin/user" style={{fontSize : fontMenuItemSize}}>User</NavDropdown.Item>
                  <NavDropdown.Item href="/admin/group" style={{fontSize : fontMenuItemSize}}>Group Access</NavDropdown.Item>
                  <NavDropdown.Item href="/admin/functionality/search" style={{fontSize : fontMenuItemSize}}>Functionality</NavDropdown.Item>
                  <NavDropdown.Item href="/admin/rule" style={{fontSize : fontMenuItemSize}}>Rule</NavDropdown.Item>
                </NavDropdown>                
              </Nav>

              <Nav>
                <NavDropdown title={userLooged().userInfo.name} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile" style={{fontSize : fontMenuItemSize}}>Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/about" style={{fontSize : fontMenuItemSize}}>About</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/#" onClick={props.logoutEvent} style={{fontSize : fontMenuItemSize}}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div>

          <Routes>
            <Route path="/" element={<AppContainer customClass="min-height" title="Home"> <Home /> </AppContainer>} />
            <Route path="/about" element={<AppContainer customClass="min-height" title="About"> <About /> </AppContainer>} />
            <Route path="/profile" element={<AppContainer customClass="min-height" title="Profile" > <Profile /> </AppContainer>} />
            <Route path="/registers/business" element={<AppContainer customClass="min-height" title="Business" > <Business /> </AppContainer>} />

            <Route path="/admin/user" element={<AppContainer customClass="min-height" title="User" > <User/> </AppContainer>} />
            <Route path="/admin/group" element={<AppContainer customClass="min-height" title="Group Access" > <Group/></AppContainer>} />
            <Route path="/admin/functionality/">
              <Route path="search" element={<AppContainer customClass="min-height" title="Functionality" subtitle="Search" > <FunctionalitySearch /> </AppContainer>} />
              <Route path="create" element={<AppContainer customClass="min-height" title="Functionality" subtitle="Create" > <FunctionalityCreate /> </AppContainer>} />
              <Route path="edit" element={<AppContainer customClass="min-height" title="Functionality" subtitle="Edit" > <FunctionalityEdit /> </AppContainer>} />
              <Route path="detail" element={<AppContainer customClass="min-height" title="Functionality" subtitle="Detail" > <FunctionalityDetail /> </AppContainer>} />
            </Route>

            <Route path="/admin/rule" element={<AppContainer customClass="min-height" title="Rule" > <Rule /> </AppContainer>} />

          </Routes>
      </div>
    </Router>
  );

  
}


export default AppNavbar