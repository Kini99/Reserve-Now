import { BsQuestionCircle } from 'react-icons/bs';
import logo from "../images/RESERVE NOW CROPPED.png";
import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from 'react';

function Header() {

  const {isAuth,logoutUser}=useContext(AuthContext);

  return (
    // to add condition based on whether logged in
    <>
      <Box bg='#003b95' w='100%' color='white'>
        <Box margin={"auto"} display={"Flex"} padding="20px 200px" justifyContent={"space-between"} height="80px">
          <Box flex='3'>
            <Link to="/"><img src={logo} alt="Reserve Now" style={{ height: "50px" }} /></Link>
          </Box>
          <Box flex='1' display={"Flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Text fontSize='xl'>En</Text>
            <BsQuestionCircle size="25px" />
{isAuth?<><Text fontSize='xl'>Hello User!</Text><Button onClick={logoutUser} colorScheme='white' variant='outline' fontSize="md" _hover={{ bg: "white", color: '#003b95', colorScheme: '#003b95', variant: 'ghost', fontWeight: "bold" }}>Logout</Button></>:(<><Link to="/login"><Button colorScheme='white' variant='outline' fontSize="md" _hover={{ bg: "white", color: '#003b95', colorScheme: '#003b95', variant: 'ghost', fontWeight: "bold" }}>
              Register
            </Button></Link>
            <Link to="/login"><Button colorScheme='white' variant='outline' fontSize="md" _hover={{ bg: "white", color: '#003b95', colorScheme: '#003b95', variant: 'ghost', fontWeight: "bold" }}>
              Sign In
            </Button></Link></>)}
            
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default Header;