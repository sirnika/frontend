import {useState  } from "react";
import {Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout"
import { toast} from "react-toastify"

const Signup = () => {
  const[username, setUserName]= useState("");
  const[email, setEmail]= useState("");
  const[password, setPassword]= useState("");
  const navigate = useNavigate();
  const userDetail={username,email,password}
  const handleSubmit= (e)=>{e.preventDefault();
    if (userDetail.username && userDetail.email && userDetail.password)
   {localStorage.setItem("userinfo",JSON.stringify (userDetail))}
    if(username && email && password) {
      window.location.replace("/");
      toast.success("Welcome User")
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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}
        onChange={(e)=> setEmail(e.target.value)}/> 
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

export default Signup