import { Link } from "react-router-dom";
import { FaFacebookMessenger, FaXTwitter, } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Layout from "./Layout";

export default function footer() {
 
  return ( 
    
    <div  className="d-flex fs-1 align-items-center justify-content-between bg-black text-white  ">
      <Link to="/" className="text-decoration-none fs-2 me-3 flex-grow-1 flex-md-grow-0 me-3 text-white fw-bold">
          TvMaze
        </Link>
<Layout>
<FaFacebookMessenger  className="me-4 " />
<FaXTwitter  className="me-4"/>
<FaInstagramSquare />
</Layout>
</div>
   
  )
}
