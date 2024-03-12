import Layout from "../components/Layout";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast} from "react-toastify"
const Login = () => {
  const[username, setUserName]= useState("");
  const[password, setPassword]= useState("");
  const navigate = useNavigate();
  const userDetail=(username,password)

  const handleSubmit= (e)=>{e.preventDefault();
    if (userDetail.username &&  userDetail.password)
   {localStorage.setItem("userinfo",JSON.stringify (userDetail))
   window.location.replace("/");
   toast.success("welcome user");
    } else{
    toast.error("pls fill in the fields");
    }
  };

  return (
    <Layout extra="d-flex justify-content-center align-items-center min-vh-100">
    <Form className="form" onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter Username" value={username}
      onChange={(e)=> setUserName(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" value={password}
        onChange={(e)=> setPassword(e.target.value)}/> 
      </Form.Group>
      <Button variant="danger" className="w-100" size="lg" type="submit">Sign up</Button>
      </Form>
    </Layout>
  )
}

export default Login

