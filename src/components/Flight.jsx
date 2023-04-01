import { Box, Text, Heading, Button } from "@chakra-ui/react";
import moment from "moment";
import Reservation from "../pages/Reservation";
import { useNavigate } from 'react-router-dom';

function Flight({flight, searchData}) {

    const formattedDepartDate = moment(searchData.departDate, "YYYY-MM-DD").format("DD-MM-YYYY");


console.log("search data")
console.log(searchData)
    // const flight = {
    //     "departureTime": "22:35",
    //     "from": "BOM",
    //     "departureDate": "3 Apr",
    //     "totalTime": "1h 10m",
    //     "type": "Direct",
    //     "arrivalTime": "23:45",
    //     "to": "GOI",
    //     "arrivalDate": "3 Apr",
    //     "airline": "Air Asia India",
    //     "amenities": "personal item, checked bag",
    //     "price": "INR2,355.62"
    // }

    const navigate=useNavigate()

    const handleBooking=()=>{
        // console.log("working");
        navigate('/reservation');
    }

    return (
        <>
            <Box display='flex' borderRadius='lg' border="2px solid #ededed" justifyContent="space-between" padding="20px">
                <Box display='flex' justifyContent="space-between" width="60%" borderRight="2px solid #ededed" paddingRight="20px">
                    <div>
                        {flight.airline=="Air Asia India"?<img src="../images/asia.png" alt="icon" />:flight.airline=="Go First"?<img src="../images/goFirst.png" alt="icon" />:flight.airline=="IndiGo"?<img src="./images/indiGo.png" alt="icon" />:flight.airline=="Air India"?<img src="../images/alliance.png" alt="icon" />:flight.airline=="Vistara"?<img src="../images/vistara.png" alt="icon" />:flight.airline=="Alliance Air"?<img src="../images/alliance.png" alt="icon" />:<img src="../images/alliance.png" alt="icon" />}
                       
                        <Text>{flight.airline}</Text>
                    </div>
                    <div>
                        <Text fontWeight="bold">{flight.departureTime}</Text>
                        <Text>{flight.from} . {formattedDepartDate}</Text>
                    </div>
                    <div>
                        <Text>{flight.totalTime}</Text>
                        <hr></hr>
                        <Text>{flight.type}</Text>
                    </div>
                    <div>
                        <Text fontWeight="bold">{flight.arrivalTime}</Text>
                        <Text>{flight.to} . {formattedDepartDate}</Text>
                    </div>
                </Box>
                <Box textAlign="right" paddingLeft="20px">
                    <img src="" alt="icon" />
                    <Text>Included: {flight.amenities}</Text>
                    <Heading as="h3" size="md" marginTop="15px">INR {flight.price}/-</Heading>
                    <Text>Total price for all travellers</Text>
                    <Button colorScheme='#003b95' color='blue' variant='outline' fontWeight="bold" fontSize="md" marginTop="15px" _hover={{ bg: "#003b95", color: 'white', variant: 'ghost', fontWeight: "bold" }} onClick={handleBooking}>Book Flight</Button>
                </Box>
            </Box>
        </>
    )
}
export default Flight;