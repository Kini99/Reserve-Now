import { FaPlaneDeparture } from "react-icons/fa";
import { TbArrowsExchange } from "react-icons/tb";
import { FaPlaneArrival } from "react-icons/fa";
import { Box, Heading, Radio, RadioGroup, Stack, Select, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverHeader, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';



const reducer = (state, action) => {
  switch (action.type) {
    case "TYPE":
      return {
        ...state,
        type: action.payload,
      };
    case "CLASS":
      return {
        ...state,
        class: action.payload,
      };
    case "ADULT_COUNT":
      const newAdultCount = parseInt(action.payload);
      return {
        ...state,
        adults: newAdultCount < 1 ? 1 : newAdultCount
      };
    case "CHILD_COUNT":
      const newChildCount = parseInt(action.payload);
      return {
        ...state,
        children: newChildCount < 0 ? 0 : newChildCount,
      };
    case "FROM":
      return {
        ...state,
        from: action.payload,
      };
    case "TO":
      return {
        ...state,
        to: action.payload,
      };
    case "DEPART_DATE":
      return {
        ...state,
        departDate: action.payload,
      };
      case "EXCHANGE":
        return {
          ...state,
          
        }
    default:
      throw new Error("Invalid Dispatch Type");
  }
};

const initialState = {
  type: "round",
  class: "economy",
  adults: 1,
  children: 0,
  from: "",
  to: "",
  departDate: "",
};

function Search({handleSearchSubmit}) {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAdultDecrease = () => {
    dispatch({ type: "ADULT_COUNT", payload: state.adults - 1 });
  };

  const handleAdultIncrease = () => {
    dispatch({ type: "ADULT_COUNT", payload: state.adults + 1 });
  };

  const handleChildDecrease = () => {
    dispatch({ type: "CHILD_COUNT", payload: state.children - 1 });
  };

  const handleChildIncrease = () => {
    dispatch({ type: "CHILD_COUNT", payload: state.children + 1 });
  };

  const handleExchange=()=>{
    let tempTo=state.from;
    let tempFrom=state.to;
    dispatch({ type: "FROM", payload: tempFrom })
    dispatch({ type: "TO", payload: tempTo })
    setLoading(true);
    handleSearchSubmit(state);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setLoading(true);
    handleSearchSubmit(state);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box display="flex" justifyContent="space-between" width="65%" alignItems="center">
          <RadioGroup defaultValue={initialState.type}
            onChange={(e) =>
              dispatch({ type: "TYPE", payload: e })
            } >
            <Stack direction='row'>
              <Radio value='round'>Round Trip</Radio>
              <Radio value='one'>One Way</Radio>
              <Radio value='multi'>Multi City</Radio>
            </Stack>
          </RadioGroup>
          <Select variant='outline' width="190px" onChange={(e) => dispatch({ type: "CLASS", payload: e.target.value })} >
            <option value="economy">Economy</option>
            <option value="premium">Premium Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </Select>
          <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <PopoverTrigger>
              <Select variant='outline' width="190px" placeholder={`${state.adults} Adult, ${state.children} Child`} onClick={() => setIsOpen(true)} ></Select>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader><PopoverCloseButton /></PopoverHeader>
              <PopoverBody>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ fontWeight: "bold" }}>Adults</p>
                    <p>Age 18+</p>
                  </div>
                  <div style={{ width: "100px", padding: "5px 10px", display: "flex", border: "0.5px solid grey", justifyContent: "space-between", margin: "2px" }}>
                    <button style={{ color: "#003b95", fontSize: "25px" }} onClick={handleAdultDecrease} >-</button>
                    <span>{state.adults}</span>
                    <button style={{ color: "#003b95", fontSize: "25px" }} onClick={handleAdultIncrease} >+</button>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ fontWeight: "bold" }}>Children</p>
                    <p>Age 0-17</p>
                  </div>
                  <div style={{ width: "100px", padding: "5px 10px", display: "flex", border: "0.5px solid grey", justifyContent: "space-between", margin: "2px" }}>
                    <button style={{ color: "#003b95", fontSize: "25px" }} onClick={handleChildDecrease} >-</button>
                    <span>{state.children}</span>
                    <button style={{ color: "#003b95", fontSize: "25px" }} onClick={handleChildIncrease} >+</button>
                  </div>
                </div>
              </PopoverBody>
              <PopoverFooter style={{ display: "flex", justifyContent: "space-between" }}>
                <span></span>
                <button style={{ backgroundColor: "#003b95", color: "white", padding: "5px 10px", borderRadius: "5px" }} onClick={() => setIsOpen(false)}>Done</button>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        </Box>
        <Box backgroundColor="#ffb700" padding="0" borderRadius="5px" display="flex" alignItems="center" margin="20px 0">
          <Box style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <InputGroup backgroundColor="white" margin="10px" width="4000px" style={{ borderRadius: "5px" }} >
              <InputLeftElement
                pointerEvents='none'
                children={<FaPlaneDeparture color='gray.300' size="22px" />}
              />
              <Input type='text' placeholder='Where From?' value={state.from} onChange={(e) => dispatch({ type: "FROM", payload: e.target.value })} required/>
            </InputGroup>
            <button style={{ backgroundColor: "white", margin: "5px", padding: "5px" }} onClick={handleExchange}><TbArrowsExchange size="25px" /></button>
            <InputGroup backgroundColor="white" margin="10px" width="4000px" style={{ borderRadius: "5px" }}>
              <InputLeftElement
                pointerEvents='none'
                children={<FaPlaneArrival color='gray.300' size="25px" />}
              />
              <Input type='text' placeholder='Where To?' value={state.to} onChange={(e) => dispatch({ type: "TO", payload: e.target.value })} required />
            </InputGroup>
            <InputGroup backgroundColor="white" margin="10px" width="2200px" style={{ borderRadius: "5px" }}>
              <Input type='date' placeholder='Departure Date' value={state.departDate} onChange={(e) => dispatch({ type: "DEPART_DATE", payload: e.target.value })} required />
            </InputGroup>
            <InputGroup style={{ borderRadius: "5px" }}>
              <input type="submit" value="SEARCH" style={{ backgroundColor: "#003b95", margin: "5px", marginLeft: "10px", padding: "10px", color: "white", borderRadius: "5px", cursor: "pointer" }} onMouseOver={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "#003b95";
                e.target.style.fontWeight = "bold";
                e.target.style.border = "1px solid #003b95";
              }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#003b95";
                  e.target.style.color = "white";
                }} />
            </InputGroup>
          </Box>
          </Box >
      </form>
    </>
  )
}

export default Search;