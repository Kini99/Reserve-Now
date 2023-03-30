import { FaPlaneDeparture } from "react-icons/fa";
import { TbArrowsExchange } from "react-icons/tb";
import { FaPlaneArrival } from "react-icons/fa";
import { Box, Heading, Radio, RadioGroup, Stack, Select, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverHeader, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

function Search(){
    return (
        <>
          <Box display="flex" justifyContent="space-between" width="65%" alignItems="center">
          <RadioGroup defaultValue="round">
            <Stack direction='row'>
              <Radio value='round'>Round Trip</Radio>
              <Radio value='one'>One Way</Radio>
              <Radio value='multi'>Multi City</Radio>
            </Stack>
          </RadioGroup>
          <Select variant='outline' width="190px">
            <option value="economy">Economy</option>
            <option value="premium">Premium Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </Select>
          <Popover>
            <PopoverTrigger>
              <Select variant='outline' width="190px" placeholder='1 Adult' value="1 Adult"></Select>
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
                    <button style={{ color: "#003b95", fontSize: "25px" }}>-</button>
                    <span></span>
                    <button style={{ color: "#003b95", fontSize: "25px" }}>+</button>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ fontWeight: "bold" }}>Children</p>
                    <p>Age 0-17</p>
                  </div>
                  <div style={{ width: "100px", padding: "5px 10px", display: "flex", border: "0.5px solid grey", justifyContent: "space-between", margin: "2px" }}>
                    <button style={{ color: "#003b95", fontSize: "25px" }}>-</button>
                    <span></span>
                    <button style={{ color: "#003b95", fontSize: "25px" }}>+</button>
                  </div>
                </div>
              </PopoverBody>
              <PopoverFooter style={{ display: "flex", justifyContent: "space-between" }}>
                <span></span>
                <button style={{ backgroundColor: "#003b95", color: "white", padding: "5px 10px", borderRadius: "5px" }}>Done</button>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        </Box>
        <Box backgroundColor="#ffb700" padding="0" borderRadius="5px" display="flex" alignItems="center" margin="20px 0">
          <form style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <InputGroup backgroundColor="white" margin="10px" width="4000px" style={{borderRadius:"5px"}}>
              <InputLeftElement
                pointerEvents='none'
                children={<FaPlaneDeparture color='gray.300' size="22px" />}
              />
              <Input type='text' placeholder='Where From?' />
            </InputGroup>
            <button style={{ backgroundColor: "white", margin: "5px", padding: "5px" }}><TbArrowsExchange size="25px" /></button>
            <InputGroup backgroundColor="white" margin="10px" width="4000px" style={{borderRadius:"5px"}}>
              <InputLeftElement
                pointerEvents='none'
                children={<FaPlaneArrival color='gray.300' size="25px" />}
              />
              <Input type='text' placeholder='Where To?' />
            </InputGroup>
            <InputGroup backgroundColor="white" margin="10px" width="2200px" style={{borderRadius:"5px"}}>
              {/* <InputLeftElement
                pointerEvents='none'
                children={<AiOutlineCalendar color='gray.300' />}
              /> */}
              <Input type='date' placeholder='Depart-Return' />
            </InputGroup>
            <InputGroup style={{borderRadius:"5px"}}>
              <input type="submit" value="SEARCH" style={{ backgroundColor: "#003b95", margin: "5px", marginLeft: "10px", padding: "10px", color: "white", borderRadius: "5px" }} />
            </InputGroup>
          </form>
        </Box>
        </>
    )
}

export default Search;