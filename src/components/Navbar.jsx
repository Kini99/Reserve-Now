import React from 'react';
import { Box, Button } from "@chakra-ui/react";
import { BiBed } from 'react-icons/bi';
import { CgAirplane } from 'react-icons/cg';
import { FaCar } from 'react-icons/fa';
import { MdAttractions } from 'react-icons/md';
import { BsTaxiFrontFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>

      <>
        <Box bg='#003b95' w='100%' color='white'>
          <Box display={"Flex"} padding="20px 200px" height="80px">
            <Link to="/working"><Button leftIcon={<BiBed size="23px" />} colorScheme='#003b95' variant='solid' fontSize="lg" fontWeight="normal" marginRight="10px" _hover={{ border: "1px solid white", borderRadius: "25px", backgroundColor: "#1a4fa0" }}>
              Stays
            </Button></Link>
            <Link to="/"><Button leftIcon={<CgAirplane size="23px" />} colorScheme='#003b95' variant='solid' fontSize="lg" fontWeight="normal" border="1px solid white" borderRadius="25px" backgroundColor="#1a4fa0" marginRight="10px" >
              Flights
            </Button></Link>
            <Link to="/working"><Button leftIcon={<FaCar size="21px" />} colorScheme='#003b95' variant='solid' fontSize="lg" fontWeight="normal" marginRight="10px" _hover={{ border: "1px solid white", borderRadius: "25px", backgroundColor: "#1a4fa0" }}>
              Car Rentals
            </Button></Link>
            <Link to="/working"><Button leftIcon={<MdAttractions size="23px" />} colorScheme='#003b95' variant='solid' fontSize="lg" fontWeight="normal" marginRight="10px" _hover={{ border: "1px solid white", borderRadius: "25px", backgroundColor: "#1a4fa0" }}>
              Attractions
            </Button></Link>
            <Link to="/working"><Button leftIcon={<BsTaxiFrontFill size="21px" />} colorScheme='#003b95' variant='solid' fontSize="lg" fontWeight="normal" marginRight="10px" _hover={{ border: "1px solid white", borderRadius: "25px", backgroundColor: "#1a4fa0" }}>
              Airport Taxis
            </Button></Link>
          </Box>
        </Box>
      </>

    </>
  )
}

export default NavBar