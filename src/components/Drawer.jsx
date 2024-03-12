import { Offcanvas, Button } from "react-bootstrap";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Drawer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = JSON.parse(localStorage.getItem("userinfo"));

  const logout = () => {
    localStorage.removeItem("userinfo");
    window.location.reload();
  };
  return (
    <>
      <CiMenuBurger
        size="30px" 
        onClick={handleShow}
        className="d-md-none me-2"
      />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link
              to="/"
              className="text-decoration-none fs-2 flex-grow-1 me-3 me-md-0 text-black fw-bold"
              onClick={handleClose}
            >
              TvMaze
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {user ? (
            <>
              {" "}
              <p className=" fs-3 fw-bold"> Hi, {user.username}</p>
              <div className="d-flex flex-column gap-3">
                <Link to="/tvshows" onClick={handleClose}>
                  Tv Shows
                </Link>
                <Button variant="primary" onClick={logout}>
                  logout
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="d-flex gap-3">
                <Link to="/signup">
                  <Button variant="outline-danger">Sign Up</Button>
                </Link>
                <Link to="/login">
                  <Button variant="danger">Login</Button>
                </Link>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
