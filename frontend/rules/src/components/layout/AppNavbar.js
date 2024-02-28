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
import UserSearch from "../admin/user/UserSearch";
import GroupSearch from "../admin/group/GroupSearch";
import FunctionalitySearch from "../admin/functionality/FunctionalitySearch";
import FunctionalityCreate from "../admin/functionality/FunctionalityCreate";
import FunctionalityEdit from "../admin/functionality/FunctionalityEdit";
import FunctionalityDetail from "../admin/functionality/FunctionalityDetail";
import GroupEdit from "../admin/group/GroupEdit";
import GroupDetail from "../admin/group/GroupDetail";
import GroupCreate from "../admin/group/GroupCreate";
import RoleSearch from "../admin/role/RoleSearch";
import RoleEdit from "../admin/role/RoleEdit";
import RoleCreate from "../admin/role/RoleCreate";
import RoleDetail from "../admin/role/RoleDetail";
import GroupFunctionalityEdit from "../admin/group/GroupFunctionalityEdit";
import UserDetail from "../admin/user/UserDetail";
import UserCreate from "../admin/user/UserCreate";
import UserEdit from "../admin/user/UserEdit";


function AppNavbar(props) {

  var fontMenuItemSize = '13px';
  var fontNavBar = '15px';
  const userLooged = () => {
    return JSON.parse(window.localStorage.getItem("userLogged")); 
  }

  return (
    <Router>
      <div>
        <Navbar bg="dark" expand="lg" variant={"dark"} style={{fontSize : fontNavBar}} fixed="top">
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
                  <NavDropdown.Item href="/admin/user/search" style={{fontSize : fontMenuItemSize}}>User</NavDropdown.Item>
                  <NavDropdown.Item href="/admin/group/search" style={{fontSize : fontMenuItemSize}}>Group Access</NavDropdown.Item>
                  <NavDropdown.Item href="/admin/functionality/search" style={{fontSize : fontMenuItemSize}}>Functionality</NavDropdown.Item>
                  <NavDropdown.Item href="/admin/role/search" style={{fontSize : fontMenuItemSize}}>Role</NavDropdown.Item>
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

            <Route path="/admin/user/">
              <Route path="search" element={<AppContainer customClass="min-height" title="User" subtitle="Search" > <UserSearch /> </AppContainer>} />
              <Route path="create" element={<AppContainer customClass="min-height" title="User" subtitle="Create" > <UserCreate /> </AppContainer>} />
              <Route path="edit" element={<AppContainer customClass="min-height" title="User" subtitle="Edit" > <UserEdit /> </AppContainer>} />
              <Route path="detail" element={<AppContainer customClass="min-height" title="User" subtitle="Detail" > <UserDetail /> </AppContainer>} />
            </Route>

            <Route path="/admin/group/">
              <Route path="search" element={<AppContainer customClass="min-height" title="Group" subtitle="Search" > <GroupSearch /> </AppContainer>} />
              <Route path="create" element={<AppContainer customClass="min-height" title="Group" subtitle="Create" > <GroupCreate /> </AppContainer>} />
              <Route path="edit" element={<AppContainer customClass="min-height" title="Group" subtitle="Edit" > <GroupEdit /> </AppContainer>} />
              <Route path="detail" element={<AppContainer customClass="min-height" title="Group" subtitle="Detail" > <GroupDetail /> </AppContainer>} />
              <Route path="groupTradeRuleFuncs" element={<AppContainer customClass="min-height" title="Group" subtitle="Detail" > <GroupFunctionalityEdit /> </AppContainer>} />
            </Route>

            <Route path="/admin/functionality/">
              <Route path="search" element={<AppContainer customClass="min-height" title="Functionality" subtitle="Search" > <FunctionalitySearch /> </AppContainer>} />
              <Route path="create" element={<AppContainer customClass="min-height" title="Functionality" subtitle="Create" > <FunctionalityCreate /> </AppContainer>} />
              <Route path="edit" element={<AppContainer customClass="min-height" title="Functionality" subtitle="Edit" > <FunctionalityEdit /> </AppContainer>} />
              <Route path="detail" element={<AppContainer customClass="min-height" title="Functionality" subtitle="Detail" > <FunctionalityDetail /> </AppContainer>} />
            </Route>

            <Route path="/admin/role/">
              <Route path="search" element={<AppContainer customClass="min-height" title="Role" subtitle="Search" > <RoleSearch /> </AppContainer>} />
              <Route path="create" element={<AppContainer customClass="min-height" title="Role" subtitle="Create" > <RoleCreate /> </AppContainer>} />
              <Route path="edit" element={<AppContainer customClass="min-height" title="Role" subtitle="Edit" > <RoleEdit /> </AppContainer>} />
              <Route path="detail" element={<AppContainer customClass="min-height" title="Role" subtitle="Detail" > <RoleDetail /> </AppContainer>} />
            </Route>

          </Routes>
      </div>
    </Router>
  );

  
}


export default AppNavbar