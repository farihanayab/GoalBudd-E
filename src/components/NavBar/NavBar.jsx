import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">GoalBudd-E</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/myposts" >My Posts</Nav.Link>
            <Nav.Link href="/orders/new" >New Post</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
      </>
    // <nav>
    //   &nbsp; | &nbsp;
    //   <Link to="/orders/new">New Post</Link>
    //   &nbsp;| &nbsp;
    //   <Link to="/myposts">My Posts</Link>
    //   &nbsp;&nbsp;
    //   <Link to="/">Home</Link>
    //   &nbsp;&nbsp;
    //   <span>Welcome, {user.name}</span>
    //   &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    // </nav>
  );
}