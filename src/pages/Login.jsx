import { BsQuestionCircle } from 'react-icons/bs';
import logo from "../images/RESERVE NOW CROPPED.png";
import { Box, Text, Heading, Input } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';
import login from "../images/login.png";
import Footer from "../components/Footer";

function Login() {
  // const {loginUser,logoutUser,loading,err}=useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usersList, setUsersList] =useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password)
    //   loginUser(email,password)
  }

useEffect(()=>{
  
},[]);


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
        {/* set a submission state and add debouncing on email */}
        {email == "" ? (<><Heading as='h3' size='lg'>Sign in or create an account</Heading>
          <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
            <div>
              <label>
                Email address
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} variant='outline' placeholder='Enter Email'></Input>
              </label>
            </div>
            <div>
              <Input type="submit" value="Continue with Email" margin="20px 135px" style={{ backgroundColor: "#003b95", color: "white", width: "200px" }} />
            </div>
          </form></>) :
          //  add if exists condition
          //              (<><Heading as='h3' size='lg'>Enter your password</Heading>
          //              <Text>Please enter your Booking.com password for</Text>
          //              <Text marginBottom="20px">
          //               {email}
          //              </Text>
          //              <div>
          //                  <label>
          //                    Password
          //                    <Input
          //                      type="password"
          //                      placeholder="Enter Password"
          //                      value={password} 
          //                     //  onChange={(e)=>setPassword(e.target.value)} 
          // // check if password matches existing
          //                      variant='outline' 
          //                    ></Input>
          //                  </label>
          //                </div>
          //                <div>
          //                  <Input type="submit" value="Sign in" margin="20px 135px" style={{backgroundColor:"#003b95", color:"white", width:"200px"}} onMouseOver={(e) => {
          //               e.target.style.backgroundColor = "white";
          //               e.target.style.color = "#003b95";
          //               e.target.style.fontWeight = "bold";
          //               e.target.style.border = "1px solid #003b95";
          //             }}
          //               onMouseOut={(e) => {
          //                 e.target.style.backgroundColor = "#003b95";
          //                 e.target.style.color = "white";
          //               }}/>
          // add onclick event to navigate
          // //                </div></>) :
          (<><Heading as='h3' size='lg'>Create password</Heading>
            <Text marginBottom="20px">Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers.</Text>
            <div>
              <label>
                Password
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant='outline'
                ></Input>
              </label>
              <label marginBottom="10px">
                Confirm Password
                <Input
                  type="password"
                  //  value={password} 
                  //  onChange={(e)=>setPassword(e.target.value)} 
                  // set new constant variable
                  variant='outline'
                ></Input>
              </label>
            </div>
            <div>
              <Input type="submit" value="Create account" margin="20px 135px" style={{ backgroundColor: "#003b95", color: "white", width: "200px" }} onMouseOver={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "#003b95";
                e.target.style.fontWeight = "bold";
                e.target.style.border = "1px solid #003b95";
              }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#003b95";
                  e.target.style.color = "white";
                }} />
                {/* add onclick event to navigate  */}
            </div></>)
        }

        <div style={{ margin: "0 50px" }}>
          <img src={login} alt="" />
        </div>
      </Box>
      <Footer />
    </>
  )
}

export default Login;