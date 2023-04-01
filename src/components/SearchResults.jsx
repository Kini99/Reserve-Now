import NavBar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import {
    Box, Text, Heading, Button, Radio, RadioGroup, Stack, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark, CheckboxGroup, Checkbox, Tabs, TabList, TabPanels, Tab, TabPanel
} from "@chakra-ui/react";
import FlightList from "./FlightList";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";



function SearchResults({ flightlist, searchData }) {

    const [filteredlist, setFilteredlist] = useState([]);
    const [cheapestlist, setCheapestlist] = useState([]);
    const [fastestlist, setFastestlist] = useState([]);


  let trailFrom = "";
  if (searchData.from == "Delhi") {
    trailFrom = "DEL";
  } else if (searchData.from == "Goa") {
    trailFrom = "GOI";
  }

  let trailTo = "";
  if (searchData.to == "Delhi") {
    trailTo = "DEL";
  } else if (searchData.to == "Goa") {
    trailTo = "GOI";
  }

  console.log("Flight list before UseEffect");
  console.log(flightlist);

  useEffect(() => {
    if (flightlist.length === 0) {
      console.log("flightlist is empty");
      return;
    }
    
    const filteredData = flightlist.filter(
      (flight) => ((flight.from == trailFrom) && (flight.to == trailTo))
    );
    
    console.log("Filtered Data");
    console.log(filteredData);
    
    setFilteredlist(filteredData)

    // console.log(filteredlist[0].price)
    const cheapestData=filteredlist.sort((a,b)=>Number(a.price)-Number(b.price))
    console.log("cheapestData")
    console.log(cheapestData)
setCheapestlist(cheapestData) 

const fastestData=filteredlist.sort((a,b)=>a.totalTime-b.totalTime)
console.log("fastestData")
    console.log(fastestData)
setFastestlist(fastestData)

  }, [flightlist, trailFrom, trailTo]);

  console.log("filtered");
  console.log(filteredlist);
  console.log("cheapest list");
  console.log(cheapestlist);



    return (
        <>
            {/* <Header />
            <NavBar /> */}
            {/* <Box padding="20px 200px" backgroundColor="#f5f5f5"><Search /></Box> */}

            <div style={{ display: "flex" }}>
                <div style={{ textAlign: "left" }} >
                    {/* filter box */}
                    <div style={{ margin: "10px 0" }}><Text fontWeight="bold">
                        Filters
                    </Text>
                        <Text>Showing 146 results</Text></div>
                    <div style={{ margin: "30px 0" }}>
                        <Text fontWeight="bold">Stops</Text>
                        <RadioGroup defaultValue="any">
                            <Stack direction='column'>
                                <Radio value='any'>Any</Radio>
                                <Radio value='direct'>Direct Only</Radio>
                                <Radio value='stop'>1 Stop Max</Radio>
                            </Stack>
                        </RadioGroup>
                    </div>
                    <div style={{ margin: "30px 0" }}><Text fontWeight="bold">
                        Duration
                    </Text>
                        <Text>Maximum Travel Time</Text>
                        <Slider aria-label='slider-ex-1' defaultValue="39" min={0} max={39}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                    </div>
                    <div style={{ margin: "30px 0" }}><Text fontWeight="bold">
                        Flight Times
                    </Text>
                        <Text style={{ marginTop: "10px" }}>Departs from <span></span> </Text>
                        <CheckboxGroup>
                            <Stack spacing={[1, 1]} direction={['column', 'column']}>
                                <Checkbox value='early'>00.00 - 05.59</Checkbox>
                                <Checkbox value='morning'>06.00 - 11.59</Checkbox>
                                <Checkbox value='evening'>12.00 - 17.59</Checkbox>
                                <Checkbox value='night'>18.00 - 23.59</Checkbox>
                            </Stack>
                        </CheckboxGroup>
                        <Text style={{ marginTop: "20px" }}>Arrives at <span></span> </Text>
                        <CheckboxGroup>
                            <Stack spacing={[1, 1]} direction={['column', 'column']}>
                                <Checkbox value='early'>00.00 - 05.59</Checkbox>
                                <Checkbox value='morning'>06.00 - 11.59</Checkbox>
                                <Checkbox value='evening'>12.00 - 17.59</Checkbox>
                                <Checkbox value='night'>18.00 - 23.59</Checkbox>
                            </Stack>
                        </CheckboxGroup>
                    </div>
                    <div style={{ margin: "10px 0" }}><Text fontWeight="bold">
                        Airlines
                    </Text>
                        <CheckboxGroup defaultValue={['asia', 'air', 'aliance', 'goFirst', 'indiGo', 'vistara']}>
                            <Stack spacing={[1, 1]} direction={['column', 'column']}>
                                <Checkbox value='asia'>Air Asia India</Checkbox>
                                <Checkbox value='air'>Air India</Checkbox>
                                <Checkbox value='aliance'>Aliance Air</Checkbox>
                                <Checkbox value='goFirst'>Go First</Checkbox>
                                <Checkbox value='indiGo'>IndiGo</Checkbox>
                                <Checkbox value='vistara'>Vistara</Checkbox>
                            </Stack>
                        </CheckboxGroup>
                    </div>
                </div>

                <div style={{ width: "80%", marginLeft: "100px" }}>
                    {/* result box */}
                    <Tabs>
                        <TabList style={{ display: "flex", gap: "30%", justifyContent: "center" }}>
                            <Tab>Best</Tab>
                            <Tab>Cheapest</Tab>
                            <Tab>Fastest</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <FlightList filteredlist={filteredlist} searchData={searchData}/>
                            </TabPanel>
                            <TabPanel>
                                <FlightList filteredlist={cheapestlist} searchData={searchData}/>
                            </TabPanel>
                            <TabPanel>
                                <FlightList filteredlist={fastestlist} searchData={searchData}/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
            </div>

        </>
    )
}

export default SearchResults;