import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
const Root = () => {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: "95vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
