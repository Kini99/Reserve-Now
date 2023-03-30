import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/Navbar";
import { Box, Text, Button, Heading, Radio, RadioGroup, Stack, Select, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverHeader, InputGroup, InputLeftElement, Input, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { FaPlaneDeparture } from "react-icons/fa";
import { TbArrowsExchange } from "react-icons/tb";
import { FaPlaneArrival } from "react-icons/fa";
import {HiOutlineInformationCircle} from "react-icons/hi";
import styles from "../css/Carausal.css"



function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <Box padding="20px 200px" textAlign={"left"} backgroundColor="#f5f5f5" >
        <Heading as="h1">Compare and book flights with ease</Heading>
        <Text fontSize="md" margin="10px 0">Discover your next dream destination</Text>
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
          <form style={{ width:"100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <InputGroup backgroundColor="white" margin="10px" width="4000px">
              <InputLeftElement
                pointerEvents='none'
                children={<FaPlaneDeparture color='gray.300' size="22px"/>}
              />
              <Input type='text' placeholder='Where From?' />
            </InputGroup>
            <button style={{ backgroundColor: "white", margin: "5px", padding: "5px" }}><TbArrowsExchange size="25px" /></button>
            <InputGroup backgroundColor="white" margin="10px" width="4000px">
              <InputLeftElement
                pointerEvents='none'
                children={<FaPlaneArrival color='gray.300' size="25px"/>}
              />
              <Input type='text' placeholder='Where To?' />
            </InputGroup>
            <InputGroup backgroundColor="white" margin="10px" width="2200px">
              {/* <InputLeftElement
                pointerEvents='none'
                children={<AiOutlineCalendar color='gray.300' />}
              /> */}
              <Input type='date' placeholder='Depart-Return' />
            </InputGroup>
            <InputGroup>
              <input type="submit" value="SEARCH" style={{ backgroundColor: "#003b95", margin: "5px", marginLeft:"10px", padding: "10px", color: "white", borderRadius:"5px" }} />
            </InputGroup>
          </form>
        </Box>
      </Box>
      <Box padding="20px 200px" margin="10px 0">
        <Box style={{border:"0.5px solid grey", borderRadius:"10px", padding:"10px", display:"flex", alignItems:"center"}}>
        <HiOutlineInformationCircle size="30px" />
        <Text margin="10px">Coronavirus (COVID-19) may affect your travel plans. <span style={{color:"blue"}}>Learn more</span></Text>
        </Box>
        <Box style={{textAlign:"left", margin:"30px 0"}}>
        <Heading as='h3' size='lg'>Popular flights near you</Heading>
        <Text fontSize="md" margin="10px 0">Find deals on domestic and international flights</Text>
        <Tabs>
  <TabList>
    <Tab>Domestic</Tab>
    <Tab>International</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
      <div class="swipper_container">
     
      <div class="swipper_cards">
    
        <div class="swiper">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        

          <div class="swiper-wrapper">
      
            <div class="swiper-slide">
              <img
                src="https://q-xx.bstatic.com/xdata/images/city/square210/674773.jpg?k=f65fb36a6b12a3f09a07232ef7946deb46871c0d5a308d3e16ff127d61233f41&o="
                alt=""
              />
              <p>Mumbai to Male City</p>
              <p>3 Apr - 10 Apr · Round trip</p>
            </div>
            <div class="swiper-slide">
              <img
                src="https://q-xx.bstatic.com/xdata/images/city/square210/674773.jpg?k=f65fb36a6b12a3f09a07232ef7946deb46871c0d5a308d3e16ff127d61233f41&o="
                alt=""
              />
              <p>Mumbai to Male City</p>
              <p>3 Apr - 10 Apr · Round trip</p>
            </div>
            <div class="swiper-slide">
              <img
                src="https://q-xx.bstatic.com/xdata/images/city/square210/674773.jpg?k=f65fb36a6b12a3f09a07232ef7946deb46871c0d5a308d3e16ff127d61233f41&o="
                alt=""
              />
              <p>Mumbai to Male City</p>
              <p>3 Apr - 10 Apr · Round trip</p>
            </div>
            <div class="swiper-slide">
              <img
                src="https://q-xx.bstatic.com/xdata/images/city/square210/674773.jpg?k=f65fb36a6b12a3f09a07232ef7946deb46871c0d5a308d3e16ff127d61233f41&o="
                alt=""
              />
              <p>Mumbai to Male City</p>
              <p>3 Apr - 10 Apr · Round trip</p>
            </div>
            <div class="swiper-slide">
              <img
                src="https://q-xx.bstatic.com/xdata/images/city/square210/674773.jpg?k=f65fb36a6b12a3f09a07232ef7946deb46871c0d5a308d3e16ff127d61233f41&o="
                alt=""
              />
              <p>Mumbai to Male City</p>
              <p>3 Apr - 10 Apr · Round trip</p>
            </div>
            
          </div>

        </div>
      </div>
    </div>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Home;