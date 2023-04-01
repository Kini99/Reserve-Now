import { Box, Text, Heading, Button } from "@chakra-ui/react";
import moment from "moment";
import Reservation from "../pages/Reservation";
import { useNavigate } from 'react-router-dom';

function Flight({flight, searchData}) {

    const formattedDepartDate = moment(searchData.departDate, "YYYY-MM-DD").format("DD-MM-YYYY");

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
        // console.log('flight',flight)
    const handleBooking=(flightData)=>{  
        navigate('/reservation',{state:{flightData,searchData}});
    }

    return (
        <>
            <Box display='flex' borderRadius='lg' border="2px solid #ededed" justifyContent="space-between" padding="20px">
                <Box display='flex' justifyContent="space-between" width="60%" borderRight="2px solid #ededed" paddingRight="20px">
                    <div>
                    {flight.airline == "Air Asia India" ? (
              <img src={require("../images/asia.png")} alt="Asia icon" />
            ) : flight.airline == "Go First" ? (
              <img src={require("../images/goFirst.png")} alt="icon" />
            ) : flight.airline == "IndiGo" ? (
              <img src={require("../images/indiGo.png")} alt="icon"  />
            ) : flight.airline == "Air India" ? (
              <img src={require("../images/alliance.png")} alt="icon" />
            ) : flight.airline == "Vistara" ? (
              <img src={require("../images/vistara.png")} alt="icon" />
            ) : flight.airline == "Alliance Air" ? (
              <img src={require("../images/alliance.png")} alt="icon" />
            ) : (
              <img src={require("../images/alliance.png")} alt="icon" />
            )}
                        <Text>{flight.airline}</Text>
                    </div>
                    <div>
                        <Text fontWeight="bold">{flight.departureTime}</Text>
                        <Text>{flight.from} . {formattedDepartDate}</Text>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <Text>{flight.totalTime}</Text>
                        <hr style={{border:"1px solid"}}></hr>
                        <Text>{flight.type}</Text>
                    </div>
                    <div>
                        <Text fontWeight="bold">{flight.arrivalTime}</Text>
                        <Text>{flight.to} . {formattedDepartDate}</Text>
                    </div>
                </Box>
                <Box textAlign="right" paddingLeft="20px" width="40%">
                    <div style={{display:"flex", justifyContent:"right"}}>
                {flight.amenities == "personal item, checked bag" ? (
            <img src={require("../images/picb.png")} alt="icon" />
          ) : flight.amenities == "personal item, cabin bag, checked bag" ? (
            <img src={require("../images/picbcb.png")} alt="icon" />
          ) : flight.amenities == "cabin bag, checked bag" ? (
            <img src={require("../images/cbcb.png")} alt="icon" />
          ) : flight.amenities == "personal item, cabin bag" ? (
            <img src={require("../images/picabin.png")} alt="icon" />
          ) : (
            <img src={require("../images/picb.png")} alt="icon" />
          )}
          </div>
                    <Text>Included: {flight.amenities}</Text>
                    <Heading as="h3" size="md" marginTop="15px">INR {flight.price}/-</Heading>
                    <Text>Total price for all travellers</Text>
                    <Button colorScheme='#003b95' color='blue' variant='outline' fontWeight="bold" fontSize="md" marginTop="15px" _hover={{ bg: "#003b95", color: 'white', variant: 'ghost', fontWeight: "bold" }} onClick={() =>handleBooking(flight)}>Book Flight</Button>
                </Box>
            </Box>
        </>
    )
}
export default Flight;