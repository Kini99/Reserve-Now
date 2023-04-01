import { Text, Heading, Input, Checkbox, Select, Button, Box } from "@chakra-ui/react";
import { RxPerson } from "react-icons/rx"

function PaymentDetails({ flight, searchInputs, handleNextStep, handleBackStep }) {




    return (
        <>
            <Heading as="h2" size="md" style={{ marginBottom: "20px" }}>Check and Pay</Heading>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ marginRight: "20px", padding: "20px", width: "60%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <img src="" alt="icon" style={{ marginRight: "20px" }} />
                        <div>
                            <Text style={{ fontWeight: "bold" }}>{searchInputs.from} - {flight.from} to {searchInputs.to} - {flight.to}</Text>
                            <Text>{searchInputs.departDate} . {flight.departureTime} - {searchInputs.departDate} . {flight.arrivalTime}</Text>
                            <Text>{searchInputs.type} . {flight.totalTime} . {searchInputs.class}</Text>
                        </div>
                        <Text style={{ color: "blue" }}>View Flight Details</Text>
                    </div>
                    <div style={{ marginRight: "20px", padding: "20px" }}>
                        <Heading as="h3" size="sm" style={{ marginBottom: "20px" }}>Contact Details</Heading>
                        <Text>Phone Number</Text>
                        <Text>Email Id</Text>
                    </div>
                </div>
                <div style={{ width: "30%" }}>
                    <table style={{ width: "100%", marginBottom: "10px" }}>
                        <tbody>
                            <tr>
                                <td style={{ width: "70%" }}>Ticket {searchInputs.adults} adult, {searchInputs.children} children</td>
                                <td style={{ textAlign: "right" }}>INR {(Number(flight.price) * (Number(searchInputs.adults) + Number(searchInputs.children))).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: "13px" }}>Flight Fare</td>
                                <td style={{ textAlign: "right", fontSize: "13px" }}>INR {(((Number(flight.price)) - (Number(flight.price) * 18 / 100)) * (Number(searchInputs.adults) + Number(searchInputs.children))).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: "13px" }}>Taxes and Charges</td>
                                <td style={{ textAlign: "right", fontSize: "13px" }}>INR {((Number(flight.price) * 18 / 100) * (Number(searchInputs.adults) + Number(searchInputs.children))).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <Heading as="h2" size="md">Total</Heading>
                        <Heading as="h2" size="md" style={{ textAlign: "right" }}>INR {(Number(flight.price) * (Number(searchInputs.adults) + Number(searchInputs.children))).toFixed(2)}/-</Heading>
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
                        <Text>Name</Text>
                        <Text>Adult . Gender</Text>
                    </div>
                </div>
            </div>
            <div style={{ border: "2px solid #ededed", marginTop: "20px", padding: "20px", borderRadius: "10px" }}>
                <Heading as="h2" size="md">Included baggage</Heading>
                <Text style={{ marginBottom: "10px" }}>The toal baggage included in the price</Text>
                <div style={{ display: "flex" }}>
                    <img src="" alt="" />
                    <div>
                        <Text>1 Personal Item</Text>
                        <Text>Must go under the seat in front of you</Text>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <img src="" alt="" />
                    <div>
                        <Text>1 Cabin Bag</Text>
                        <Text>Max Weight 7kg</Text>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <img src="" alt="" />
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
                <Button bg="blue" color="white" onClick={handleNextStep}>Pay Now</Button>
            </div>
        </>
    )
}

export default PaymentDetails;