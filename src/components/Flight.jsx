import { Box, Text, Heading, Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure } from "@chakra-ui/react";

function Flight() {

    const flight = {
        "departureTime": "22:35",
        "from": "BOM",
        "departureDate": "3 Apr",
        "totalTime": "1h 10m",
        "type": "Direct",
        "arrivalTime": "23:45",
        "to": "GOI",
        "arrivalDate": "3 Apr",
        "airline": "Air Asia India",
        "amenities": "personal item, checked bag",
        "price": "INR2,355.62"
    }

    return (
        <>
            <Box display='flex' borderRadius='lg' border="2px solid #ededed" justifyContent="space-between" padding="20px">
                <Box display='flex' justifyContent="space-between" width="60%" borderRight="2px solid #ededed" paddingRight="20px">
                    <div>
                        <img src="" alt="icon" />
                        <Text>Airline</Text>
                    </div>
                    <div>
                        <Text fontWeight="bold">Departure Time</Text>
                        <Text>Airport . Date</Text>
                    </div>
                    <div>
                        <Text>Duration</Text>
                        <hr></hr>
                        <Text>Direct</Text>
                    </div>
                    <div>
                        <Text fontWeight="bold">Arrival Time</Text>
                        <Text>Airport . Date</Text>
                    </div>
                </Box>
                <Box textAlign="right" paddingLeft="20px">
                    <img src="" alt="icon" />
                    <Text>Included: personal item, checked bag</Text>
                    <Heading as="h3" size="md" marginTop="15px">INR</Heading>
                    <Text>Total price for all travellers</Text>
                    <Button colorScheme='#003b95' color='blue' variant='outline' fontWeight="bold" fontSize="md" marginTop="15px" _hover={{ bg: "#003b95", color: 'white', variant: 'ghost', fontWeight: "bold" }}>Book Flight</Button>
                </Box>
            </Box>
        </>
    )
}
export default Flight;