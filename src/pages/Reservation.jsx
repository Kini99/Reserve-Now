import Header from "../components/Header";
import { useState } from "react";
import { Text, Heading, Input, Checkbox, Select, Button, Box } from "@chakra-ui/react";
import moment from "moment";
import TravellerDetails from "../components/TravellerDetails";
import PaymentDetails from "../components/PaymentDetails";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";


function Reservation() {
    // const location = useLocation();
    // const { flight, searchInputs } = location.state;

// console.log("reservation page")
// console.log(flight)
// console.log(searchInputs)

    const [step, setStep] = useState(1);
    const handleNextStep = () => {
        setStep(step + 1);
    };
    const handleBackStep = () => {
        setStep(step - 1);
    };

    const searchInputs = {
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
        "from": "DEL",
        "departureDate": "3 Apr",
        "totalTime": "1h 10m",
        "type": "Direct",
        "arrivalTime": "23:45",
        "to": "GOI",
        "arrivalDate": "3 Apr",
        "airline": "Air Asia India",
        "amenities": "personal item, checked bag",
        "price": "2355.62"
    }

    
    const formattedDepartDate = moment(searchInputs.departDate, "YYYY-MM-DD").format("DD-MM-YYYY");

    return ( 
        <>
            <Header />
            <div className="slider" style={{ display: "flex", padding: "20px 200px", justifyContent: "space-between", backgroundColor: "#f5f5f5", marginBottom: "5px" }}>
                <div className={`step ${step >= 1 ? 'completed' : ''}`}>
                    <span style={{ backgroundColor: "blue", borderRadius: "50%", padding: "2px 8px", color: "white" }}>{step >= 1 ? <span>&#10003;</span> : '1'}</span>
                    <p>Select Flight</p>
                </div>
                <hr></hr>
                <div className={`step ${step >= 2 ? 'completed' : ''}`}>
                    <span style={{ backgroundColor: "blue", borderRadius: "50%", padding: "2px 8px", color: "white" }}>{step >= 2 ? <span>&#10003;</span> : '2'}</span>
                    <p>Who's Flying</p>
                </div>
                <hr></hr>
                <div className={`step ${step >= 3 ? 'completed' : ''}`}>
                    <span style={{ backgroundColor: "blue", borderRadius: "50%", padding: "2px 8px", color: "white" }}>{step >= 3 ? <span>&#10003;</span> : '3'}</span>
                    <p>Check and Pay</p>
                </div>

            </div>
            <Box padding="20px 200px" textAlign={"left"}>
                <Text>One Way . {searchInputs.adults} traveller . {formattedDepartDate}</Text>
                <Heading as="h1" size="lg" style={{marginBottom:"20px"}}>{searchInputs.from} to {searchInputs.to}</Heading>
                {step==1?<TravellerDetails flight={flight} searchInputs={searchInputs} handleNextStep={handleNextStep} handleBackStep={handleBackStep}/>:<PaymentDetails flight={flight} searchInputs={searchInputs} handleNextStep={handleNextStep} handleBackStep={handleBackStep}/> }
            </Box>
            <Footer />
        </>

    )
}

export default Reservation;