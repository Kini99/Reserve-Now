import Header from "../components/Header";
import { useState } from "react";
import {Text, Heading, Input, Checkbox, Select, Button} from "@chakra-ui/react"

function Reservation() {
    const [step, setStep] = useState(1);
    const handleNextStep = () => {
        setStep(step + 1);
    };

    const searchInputs={
        type: "round",
  class: "economy",
  adults: 1,
  children: 0,
  from: "Delhi",
  to: "Goa",
  departDate: "03/04/2023",
    }

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
            <Header />
            <div className="slider">
                <div className={`step ${step >= 1 ? 'completed' : ''}`}>
                    <span>{step >= 1 ? <span>&#10003;</span> : '1'}</span>
                    <p>Select Flight</p>
                </div>
                <div className={`step ${step >= 2 ? 'completed' : ''}`}>
                    <span>{step >= 2 ? <span>&#10003;</span> : '2'}</span>
                    <p>Who's Flying</p>
                </div>
                <div className={`step ${step >= 3 ? 'completed' : ''}`}>
                    <span>{step >= 3 ? <span>&#10003;</span> : '3'}</span>
                    <p>Check and Pay</p>
                </div>
                
            </div>
<Text>One Way . {searchInputs.adults} traveller . {searchInputs.departDate}</Text>
<Heading as="h1" size="lg">{searchInputs.from} to {searchInputs.to}</Heading>
<Heading as="h2" size="md">Who's flying?</Heading>
<div style={{display:"flex"}}>
<div style={{border: "0.5px solid #ededed"}}>
<Heading as="h3" size="sm">Contact Details</Heading>
<p><span style={{color:"red"}}>*</span> Required</p>
<label>Contact Email <span style={{color:"red"}}>*</span></label>
<Input></Input>
<p>We'll send your flight confirmation here</p>
<label>Phone Number <span style={{color:"red"}}>*</span></label>
<Input type="number"></Input>
<Checkbox>Get free SMS updates about your flight</Checkbox>
</div>
<div>
    <table>
        <tbody>
            <tr>
                <td>Ticket {searchInputs.adults} adult</td>
                <td>INR {flight.price}</td>
            </tr>
            <tr>
                <td>Flight Fare</td>
                <td>INR {flight.price-flight.price*18/100}</td>
            </tr>
            <tr>
                <td>Taxes and Charges</td>
                <td>INR {flight.price*18/100}</td>
            </tr>
        </tbody>
    </table>
    <div style={{display:"flex"}}>
    <Heading as="h2" size="md">Total</Heading>
    <Heading as="h2" size="md">INR {flight.price}</Heading>
    </div>
    <p>Includes taxes and charges</p>
    <p>No hidden fees - track your price at every step</p>
    <p style={{color:"blue"}}>View price breakdown</p>
</div>
</div>
<div>
<Heading as="h2" size="md">Traveller 1 (Adult)</Heading>
<p><span style={{color:"red"}}>*</span> Required</p>
<div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)"}}>
<div>
<label>First Name</label>
<Input></Input>
<p>Enter exactly what's written on this traveller's travel document</p>
</div>
<div>
<label>Last Name</label>
<Input></Input>
<p>Enter exactly what's written on this traveller's travel document</p>
</div>
<div>
<label>Gender specified on your travel document</label>
<Select>
    <option value="">Select your gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
</Select>
<p>We're currently required by airlines and providers to ask for this information</p>
</div>
</div>
<Button color="blue">Back</Button>
<Button bg="blue" color="white">Next</Button>
</div>





            {/* <div className="button-container">
                    {step < 3 ? (
                        <button onClick={handleNextStep}>Next</button>
                    ) : (
                        <button>Finish</button>
                    )}
                </div> */}
        </>

    )
}

export default Reservation;