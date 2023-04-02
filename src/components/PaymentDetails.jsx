import { Text, Heading, Input, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { RxPerson } from "react-icons/rx";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function PaymentDetails({ flightData, searchData, handleNextStep, handleBackStep, travellerDetails }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();

    const handleClose = () => {
        window.scrollTo(0, 0);
        navigate('/');
    }

    return (
        <>
            <Heading as="h2" size="md" style={{ marginBottom: "20px" }}>Check and Pay</Heading>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ marginRight: "20px", padding: "20px", width: "60%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        {flightData.airline == "Air Asia India" ? (
              <img src={require("../images/asia.png")} alt="Asia icon" style={{ marginRight: "20px", height:"70%" }}/>
            ) : flightData.airline == "Go First" ? (
              <img src={require("../images/goFirst.png")} alt="icon" style={{ marginRight: "20px" , height:"70%"}}/>
            ) : flightData.airline == "IndiGo" ? (
              <img src={require("../images/indiGo.png")} alt="icon" style={{ marginRight: "20px" , height:"70%"}}/>
            ) : flightData.airline == "Air India" ? (
              <img src={require("../images/alliance.png")} alt="icon" style={{ marginRight: "20px" , height:"70%"}}/>
            ) : flightData.airline == "Vistara" ? (
              <img src={require("../images/vistara.png")} alt="icon" style={{ marginRight: "20px" , height:"70%"}} />
            ) : flightData.airline == "Alliance Air" ? (
              <img src={require("../images/alliance.png")} alt="icon" style={{ marginRight: "20px" , height:"70%"}}/>
            ) : (
              <img src={require("../images/alliance.png")} alt="icon" style={{ marginRight: "20px" , height:"70%"}}/>
            )}
                        <div>
                            <Text style={{ fontWeight: "bold" }}>{flightData.from} to {flightData.to}</Text>
                            <Text>{searchData.departDate} . {flightData.departureTime} - {searchData.departDate} . {flightData.arrivalTime}</Text>
                            <Text>{searchData.type} . {flightData.totalTime} . {searchData.class}</Text>
                        </div>
                        <Text style={{ color: "blue" }}>View Flight Details</Text>
                    </div>
                    <div style={{ marginRight: "20px", padding: "20px" }}>
                        <Heading as="h3" size="sm" style={{ marginBottom: "20px" }}>Contact Details</Heading>
                        <Text>{travellerDetails.number}</Text>
                        <Text>{travellerDetails.email}</Text>
                    </div>
                </div>
                <div style={{ width: "30%" }}>
                    <table style={{ width: "100%", marginBottom: "10px" }}>
                        <tbody>
                            <tr>
                                <td style={{ width: "70%" }}>Ticket {searchData.adults} adult, {searchData.children} children</td>
                                <td style={{ textAlign: "right" }}>INR {(Number(flightData.price) * (Number(searchData.adults) + Number(searchData.children))).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: "13px" }}>Flight Fare</td>
                                <td style={{ textAlign: "right", fontSize: "13px" }}>INR {(((Number(flightData.price)) - (Number(flightData.price) * 18 / 100)) * (Number(searchData.adults) + Number(searchData.children))).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: "13px" }}>Taxes and Charges</td>
                                <td style={{ textAlign: "right", fontSize: "13px" }}>INR {((Number(flightData.price) * 18 / 100) * (Number(searchData.adults) + Number(searchData.children))).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <Heading as="h2" size="md">Total</Heading>
                        <Heading as="h2" size="md" style={{ textAlign: "right" }}>INR {(Number(flightData.price) * (Number(searchData.adults) + Number(searchData.children))).toFixed(2)}/-</Heading>
                    </div>
                    <p style={{ fontSize: "13px" }}>Includes taxes and charges</p>
                    <p style={{ fontSize: "13px" }}>No hidden fees - track your price at every step</p>
                    <p style={{ fontSize: "13px", color: "blue" }}>View price breakdown</p>
                </div>
            </div>
            <div style={{ border: "2px solid #ededed", marginTop: "20px", padding: "20px", borderRadius: "10px" }}>
                <Heading as="h2" size="md" style={{ marginBottom: "10px" }}>Traveller Details</Heading>
                <div style={{ display: "flex" }}>
                    <div>
                        <RxPerson size="20px" />
                    </div>
                    <div>
                        <Text>{travellerDetails.firstName} {travellerDetails.lastName}</Text>
                        <Text>Adult . {travellerDetails.gender}</Text>
                    </div>
                </div>
            </div>
            <div style={{ border: "2px solid #ededed", marginTop: "20px", padding: "20px", borderRadius: "10px" }}>
                <Heading as="h2" size="md">Included baggage</Heading>
                <Text style={{ marginBottom: "10px" }}>The toal baggage included in the price</Text>
                <div style={{ display: "flex"}}>
                    <img src={require("../images/personalItem.png")} alt="icon" style={{width:"30px"}} />
                    <div>
                        <Text>1 Personal Item</Text>
                        <Text>Must go under the seat in front of you</Text>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <img src={require("../images/cabinBag.png")} alt="" style={{width:"30px"}}/>
                    <div>
                        <Text>1 Cabin Bag</Text>
                        <Text>Max Weight 7kg</Text>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <img src={require("../images/checkedBag.png")} alt="" style={{width:"30px"}} />
                    <div>
                        <Text>1 Checked Bag</Text>
                        <Text>Max Weight 15kg</Text>
                    </div>
                </div>
            </div>
            <div style={{ border: "2px solid #ededed", marginTop: "20px", padding: "20px", borderRadius: "10px", width: "50%" }}>
                <Heading as="h2" size="md">Your Payment</Heading>
                <Text style={{ marginBottom: "10px" }}>Simple, safe and secure</Text>
                <label>Cardholder's Name <span style={{ color: "red" }}>*</span></label><br />
                <Input marginBottom="10px" required border="3px solid #ededed"></Input><br />
                <label>Card Number <span style={{ color: "red" }}>*</span></label><br />
                <Input marginBottom="10px" required border="3px solid #ededed" width="70%"></Input><br />
                <label>Expiry Date <span style={{ color: "red" }}>*</span></label><br />
                <Input marginBottom="10px" required placeholder="MM/YY" border="3px solid #ededed" width="20%"></Input><br />
                <label>CVC <span style={{ color: "red" }}>*</span></label><br />
                <Input marginBottom="10px" required border="3px solid #ededed" width="20%"></Input><br />
            </div>
            <Text style={{ marginTop: "10px" }}>By clicking "Pay Now" you agree with the <span style={{ color: "blue" }}>terms and conditions and privacy policy</span> of Reserve Now.</Text>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <Button color="blue" onClick={handleBackStep}>Back</Button>
                <Button bg="blue" color="white" onClick={onOpen}>Pay Now</Button>
            </div>
            <Modal isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader style={{ textAlign: "center" }}>YOUR BOOKING IS CONFIRMED</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqhhhE4AvVAeWurDWPvVSEWAxuIn3iwY-751iKpTDePe5VUO4ZJw-SZ_zue1ipEUxDhY&usqp=CAU" alt="icon" />
                        </div>
                        <Text style={{ textAlign: "center" }}>You will receive an email of your booking confirmation along with flight ticket and invoice shortly.</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleClose}>
                            Go to Home Page
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PaymentDetails;