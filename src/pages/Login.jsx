import { BsQuestionCircle } from 'react-icons/bs';
import logo from "../images/RESERVE NOW CROPPED.png";
import { Box, Text, Heading, Input } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';
import login from "../images/login.png";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

function Login() {
  // const {loginUser,logoutUser,loading,err}=useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usersList, setUsersList] =useState(null);
  const [createPasswordComponent , setCreatePasswordComponent]=useState(false);
  const [enterPassword, setEnterPassword]= useState(false);
  const [isLoading,setIsLoading]=useState(false)
  const navigate=useNavigate()
  const [id,setId]=useState("")

  const {isAuth, handleExistingUser, handleNewUser, logoutUser, loading, err}=useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true)
    fetch("https://reserve-now-server.onrender.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const user = data.find((user) => user.email == email);
      console.log(user)
      if (user) {
        setEnterPassword(true);
        setId(user.id)
      } else {
        setCreatePasswordComponent(true);
      }
    })
    .catch((error) => console.log(error));
    setIsLoading(false)
  }

  const existingUserCheck=(email,password)=>{
    handleExistingUser(email,password,id);
  }

  const newUserCheck=(email,password)=>{
    handleNewUser(email,password);
  }

// const handleExistingUser=(email,password)=>{
//   fetch(`https://reserve-now-server.onrender.com/users?email=${email}`)
//   .then(response => response.json())
//   .then(data => {
//     if (data.length > 0) {
//       const userPassword = data[0].password;
//       if (password === userPassword) {
//         alert("Login successful");
//         navigate("/");
//       } else {
//         alert("Incorrect password");
//       }
//     } else {
//       alert("User not found");
//     }
//   })
//   .catch(error => {
//     alert("Error retrieving user data", error);
//   });
// }

// const handleNewUser=async(email,password)=>{
//   try {
//     const response = await fetch('https://reserve-now-server.onrender.com/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password
//       })
//     });

//     if (response.ok) {
//       alert('Login Successful');
//       window.scrollTo(0, 0);
//       navigate("/");
//     } else {
//       throw new Error('Failed to create user');
//     }
//   } catch (error) {
//     console.error(error);
//     alert('Failed to create user');
//   }
// }


  return (
    <>
      <Box bg='#003b95' w='100%' color='white'>
        <Box margin={"auto"} display={"Flex"} padding="20px 200px" justifyContent={"space-between"} height="80px">
          <Box flex='3'>
            <Link to="/"><img src={logo} alt="Reserve Now" style={{ height: "50px" }} /></Link>
          </Box>
          <Box flex='1' display={"Flex"} justifyContent={"right"} alignItems={"center"}>
            <Text fontSize='xl' marginRight="20px">En</Text>
            <BsQuestionCircle size="25px" />
          </Box>
        </Box>
      </Box>
{isLoading||loading?<Loading />:(<><Box style={{ textAlign: "left", margin: "30px auto", padding: "20px 500px" }}>
        {createPasswordComponent == false && enterPassword ==false ? (<><Heading as='h3' size='lg'>Sign in or create an account</Heading>
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
          </form></>) : enterPassword ?
                       (<><Heading as='h3' size='lg'>Enter your password</Heading>
                       <Text>Please enter your Booking.com password for</Text>
                       <Text style={{marginBottom:"20px"}}>
                        {email}
                       </Text>
                       <form onSubmit={existingUserCheck}>
                       <div>
                           <label>
                             Password
                             <Input
                               type="password"
                               placeholder="Enter Password"
                               value={password} 
                               onChange={(e)=>setPassword(e.target.value)} 
                               variant='outline' 
                             ></Input>
                           </label>
                         </div>
                         <div>
                           <Input type="submit" value="Sign in" margin="20px 135px" style={{backgroundColor:"#003b95", color:"white", width:"200px"}} onMouseOver={(e) => {
                        e.target.style.backgroundColor = "white";
                        e.target.style.color = "#003b95";
                        e.target.style.fontWeight = "bold";
                        e.target.style.border = "1px solid #003b95";
                      }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = "#003b95";
                          e.target.style.color = "white";
                        }}/>
                   </div>
          </form></>) :
          (<><Heading as='h3' size='lg'>Create password</Heading>
            <Text style={{marginBottom:"20px"}}>Use a minimum of 6 characters, including uppercase letters, lowercase letters and numbers.</Text>
            <form onSubmit={newUserCheck}>
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
              <label style={{marginBottom:"20px"}}>
                Confirm Password
                <Input
                  type="password"
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
            </div>
            </form></>)
        }

        <div style={{ margin: "0 50px" }}>
          <img src={login} alt="" />
        </div>
      </Box></>)}
      
      <Footer />
    </>
  )
}

export default Login;