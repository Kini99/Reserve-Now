import { BsQuestionCircle } from 'react-icons/bs';
import logo from "../images/RESERVE NOW CROPPED.png";
import { Box, Text, Heading, Input } from "@chakra-ui/react";
import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';
import login from "../images/login.png";
import Footer from "../components/Footer";

function Login() {
    // const {loginUser,logoutUser,loading,err}=useContext(AuthContext);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  
    const handleSubmit=(event)=>{
      event.preventDefault();
      console.log(email,password)
    //   loginUser(email,password)
    }
    return (
        <>
            <Box bg='#003b95' w='100%' color='white'>
                <Box margin={"auto"} display={"Flex"} padding="20px 200px" justifyContent={"space-between"} height="80px">
                    <Box flex='3'>
                        <img src={logo} alt="Reserve Now" style={{ height: "50px" }} />
                    </Box>
                    <Box flex='1' display={"Flex"} justifyContent={"right"} alignItems={"center"}>
                        <Text fontSize='xl' marginRight="20px">En</Text>
                        <BsQuestionCircle size="25px" />
                    </Box>
                </Box>
            </Box>

            <Box style={{ textAlign: "left", margin: "30px auto", padding: "20px 500px" }}>
                
                    <Heading as='h3' size='lg'>Sign in or create an account</Heading>
             
      <form onSubmit={handleSubmit} style={{margin:"20px"}}>
        <div>
          <label>
            Email address
            <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} variant='outline' placeholder='Enter Email'></Input>
          </label>
        </div>
        <div>
          <label>
            Password
            <Input
              type="password"
              placeholder="Enter Password"
              value={password} onChange={(e)=>setPassword(e.target.value)} variant='outline' 
            ></Input>
          </label>
        </div>
        <div>
          <Input type="submit" value="SUBMIT" margin="20px 135px" style={{backgroundColor:"#003b95", color:"white", width:"200px"}} />
        </div>
      </form>
      <div style={{margin:"0 50px"}}>
      <img src={login} alt="" />
      </div>
            </Box>
            <Footer />
        </>
    )
}

export default Login;