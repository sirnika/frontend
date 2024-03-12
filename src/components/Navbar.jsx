import { useState, useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Drawer from "./Drawer";



const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [closeSearch, setCloseSearch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.length > 0) {
      setCloseSearch(true);
    } else{ setCloseSearch(false);}
  }, [searchQuery]);
  const user = JSON.parse(localStorage.getItem("userinfo"));
  const logout = () => {
    localStorage.removeItem("userinfo");
    window.location.reload();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.length > 0) {
      navigate(`/search?query=${searchQuery}`);
    }
  };
  const handleClose = () => {
    setCloseSearch(false);
    setSearchQuery("");
  };
  return (
    <div
      className="position-fixed top-0 bg-light  p-3 w-100"
      style={{ zIndex: 5 }}
    >
      <div className=" pageLayout d-flex justify-content-between align-items-center">
        <Drawer/>
        <Link to="/" className="text-decoration-none fs-2 me-3 flex-grow-1 flex-md-grow-0 me-3 text-black fw-bold">
          TvMaze
        </Link>
        <Link to="/tvshows" className="d-none d-md-flex text-decoration-none flex-grow-1 text-black fw-small">
          TvShows
        </Link>
          
        {user ? (
          <div className="d-flex align-items-center">
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <Form.Control
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {closeSearch ? (
                   <Button variant="none" onClick={handleClose}>
                  <IoMdClose size="30px" className="cursor" />
                  </Button>
                ) : (
                  <Button variant="none" type="submit">
                    <CiSearch size="30px" className="cursor" />
                  </Button>
                )}
              </InputGroup>
            </Form>
            <span className=" d-none d-md-block fs-3 mx-4"> Hi, {user.username}</span>
            <Button className="d-none d-md-block" onClick={logout}>
              logout
            </Button>
          </div>
        ) : (
          <div className="d-flex gap-3">
            <Link to="/signup">
              <Button variant="outline-danger">Sign Up</Button>
            </Link>
            <Link to="/login">
              <Button variant="danger">Login</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
