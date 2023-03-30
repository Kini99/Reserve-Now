import { BsQuestionCircle } from 'react-icons/bs';
import footer from "../images/footer img.png";
import { Box, Text, Button } from "@chakra-ui/react";

function Footer() {
    return (
        <>
            <Box bg='#003b95' w='100%' color='white' margin={"auto"} display={"Flex"} padding="10px 200px" justifyContent={"space-between"} >
                <Text textDecoration="underline" textDecorationThickness="1px">About Reserve Now</Text>
                <Text textDecoration="underline" textDecorationThickness="1px">Terms & Conditions</Text>
                <Text textDecoration="underline" textDecorationThickness="1px">How we work</Text>
                <Text textDecoration="underline" textDecorationThickness="1px">Privacy & Cookie statement</Text>
                <Text textDecoration="underline" textDecorationThickness="1px">Flights Help</Text>
            </Box>
            <Text margin="10px">Copyright © 1996-2023 Reserve Now. All rights reserved.</Text>
            <Text marginBottom="10px">Reserve Now is part of Reserve Now Holdings Inc., the world leader in online travel and related services.</Text>
            <div style={{ margin: "auto", display: "flex", padding: "20px 200px" }}><img src={footer} alt="" /></div>

        </>
    )
}
export default Footer;