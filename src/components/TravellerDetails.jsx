import { Text, Heading, Input, Checkbox, Select, Button, Box } from "@chakra-ui/react";
import { useReducer } from "react";

const initState={
    email:"",
    number:"",
    firstName:"",
    lastName:"",
    gender:""
}

const reducer=(state,action)=>{
    switch (action.type) {
		case "EMAIL": {
			return {
				...state,
				email: action.payload
			}
		}
        case "NUMBER": {
			return {
				...state,
				number: action.payload
			}
		}
        case "FIRSTNAME": {
			return {
				...state,
				firstName: action.payload
			}
		}
        case "LASTNAME": {
			return {
				...state,
				lastName: action.payload
			}
		}
        case "GENDER": {
			return {
				...state,
				gender: action.payload
			}
		}
        default: {
			throw new Error(`Invalid Action type`)
		}
    }
}


function TravellerDetails({flightData, searchData, handleNextStep, handleBackStep, updateTravellerDetails}){

    const [state, dispatch] = useReducer(reducer, initState)

    const handleNext = () => {
        handleNextStep();
        updateTravellerDetails(state);
      };

    return(
        <>
        <Heading as="h2" size="md" style={{marginBottom:"20px"}}>Who's flying?</Heading>
                <div style={{ display: "flex", justifyContent:"space-between" }}>
                    <div style={{ border: "2px solid #ededed", marginRight:"20px", padding:"20px", borderRadius:"10px", width:"70%" }}>
                        <Heading as="h3" size="sm">Contact Details</Heading>
                        <p style={{fontSize:"13px", marginBottom:"10px"}}><span style={{ color: "red" }}>*</span> Required</p>
                        <label>Contact Email <span style={{ color: "red" }}>*</span></label><br/>
                        <Input width="70%" marginBottom="10px" required border="3px solid #ededed" value={state.email} onChange={(e)=>{dispatch({type:"EMAIL",payload:e.target.value})}}></Input>
                        <p style={{fontSize:"13px"}}>We'll send your Flight confirmation here</p>
                        <label>Phone Number <span style={{ color: "red" }}>*</span></label><br/>
                        <Input width="50%" marginBottom="10px" required border="3px solid #ededed" value={state.number} onChange={(e)=>{dispatch({type:"NUMBER",payload:e.target.value})}}></Input><br/>
                        <Checkbox>Get free SMS updates about your flightData</Checkbox>
                    </div>
                    <div style={{width:"30%"}}>
                        <table style={{width:"100%", marginBottom:"10px"}}>
                            <tbody>
                                <tr>
                                    <td style={{width:"70%"}}>Ticket {searchData.adults} adult, {searchData.children} children</td>
                                    <td style={{textAlign:"right"}}>INR {(Number(flightData.price) * (Number(searchData.adults) + Number(searchData.children))).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td style={{fontSize:"13px"}}>Flight Fare</td>
                                    <td style={{textAlign:"right", fontSize:"13px"}}>INR {(((Number(flightData.price)) - (Number(flightData.price) * 18 / 100))*(Number(searchData.adults)+Number(searchData.children))).toFixed(2)}</td>
                                </tr>
                                <tr>    
                                    <td style={{fontSize:"13px"}}>Taxes and Charges</td>
                                    <td style={{textAlign:"right", fontSize:"13px"}}>INR {((Number(flightData.price) * 18 / 100)*(Number(searchData.adults)+Number(searchData.children))).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style={{ display: "flex", justifyContent:"space-between", marginBottom:"10px" }}>
                            <Heading as="h2" size="md">Total</Heading>
                            <Heading as="h2" size="md" style={{textAlign:"right"}}>INR {(Number(flightData.price) * (Number(searchData.adults) + Number(searchData.children))).toFixed(2)}/-</Heading>
                        </div>
                        <p style={{fontSize:"13px"}}>Includes taxes and charges</p>
                        <p style={{fontSize:"13px"}}>No hidden fees - track your price at every step</p>
                        <p style={{fontSize:"13px", color: "blue" }}>View price breakdown</p>
                    </div>
                </div>
                <div style={{ border: "2px solid #ededed", marginTop:"20px", padding:"20px", borderRadius:"10px" }}>
                    <Heading as="h2" size="md">Traveller 1 (Adult)</Heading>
                    <p style={{fontSize:"13px", marginBottom:"10px"}}><span style={{ color: "red" }}>*</span> Required</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap:"20px" }}>
                        <div>
                            <label>First Name <span style={{ color: "red" }}>*</span></label>
                            <Input required border="3px solid #ededed" value={state.firstName} onChange={(e)=>{dispatch({type:"FIRSTNAME",payload:e.target.value})}}></Input>
                            <p style={{fontSize:"13px", marginBottom:"10px"}}>Enter exactly what's written on this traveller's travel document</p>
                        </div>
                        <div>
                            <label>Last Name <span style={{ color: "red" }}>*</span></label>
                            <Input required border="3px solid #ededed" value={state.lastName} onChange={(e)=>{dispatch({type:"LASTNAME",payload:e.target.value})}}></Input>
                            <p style={{fontSize:"13px", marginBottom:"10px"}}>Enter exactly what's written on this traveller's travel document</p>
                        </div>
                        <div>
                            <label>Gender specified on your travel document <span style={{ color: "red" }}>*</span></label>
                            <Select required border="3px solid #ededed" value={state.gender} onChange={(e)=>{dispatch({type:"GENDER",payload:e.target.value})}}>
                                <option value="">Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Select>
                            <p style={{fontSize:"13px", marginBottom:"20px"}}>We're currently required by airlines and providers to ask for this information</p>
                        </div>
                    </div>
                </div>
                <div style={{width:"100%", display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                    <Button color="blue" onClick={handleBackStep}>Back</Button>
                    <Button bg="blue" color="white" onClick={handleNext}>Next</Button>
                    </div>
                    </>
    )
}

export default TravellerDetails;