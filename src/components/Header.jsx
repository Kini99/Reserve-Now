import { BsQuestionCircle } from 'react-icons/bs';
import logo from "../images/RESERVE NOW CROPPED.png";
import { Box, Text, Button } from "@chakra-ui/react";

function Header() {
  return (
    <>
      <Box bg='#003b95' w='100%' color='white'>
        <Box margin={"auto"} display={"Flex"} padding="20px 200px" justifyContent={"space-between"} height="80px">
          <Box flex='3'>
            <img src={logo} alt="Reserve Now" style={{ height: "50px" }} />
          </Box>
          <Box flex='1' display={"Flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Text fontSize='xl'>En</Text>
            <BsQuestionCircle size="25px" />
            <Button colorScheme='white' variant='outline' fontSize="md" _hover={{ bg: "white", color: '#003b95', colorScheme: '#003b95', variant: 'ghost', fontWeight: "bold" }}>
              Register
            </Button>
            <Button colorScheme='white' variant='outline' fontSize="md" _hover={{ bg: "white", color: '#003b95', colorScheme: '#003b95', variant: 'ghost', fontWeight: "bold" }}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default Header;