import { Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

const BooksPage = () => {
  const { user } = useSelector((state) => state.user);

  const logoutUser = () => {
    localStorage.setItem("refreshJWT", "");
    sessionStorage.setItem("accessJWT", "");
  };

  const handleOnClick = () => {
    logoutUser();
  };

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Books</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{user.name}</a>
            </Navbar.Text>
            <Navbar.Text>
              <span>&nbsp; |&nbsp; </span>
              <a href="/" onClick={handleOnClick}>
                Logout
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>List of Books</h1>
    </>
  );
};

export default BooksPage;
