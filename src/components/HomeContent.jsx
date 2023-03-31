import { Box, Text, Heading, Tabs, Tab, TabList, TabPanels, TabPanel, SimpleGrid, Button } from "@chakra-ui/react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import Search from "../components/Search";

function HomeContent(){
    return (
        <>
       
      <Box margin="10px 0">
        <Box style={{ border: "0.5px solid #ededed", borderRadius: "10px", padding: "10px", display: "flex", alignItems: "center" }}>
          <HiOutlineInformationCircle size="30px" />
          <Text margin="10px">Coronavirus (COVID-19) may affect your travel plans. <span style={{ color: "blue" }}>Learn more</span></Text>
        </Box>
        <Box style={{ textAlign: "left", margin: "30px 0" }}>
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
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box style={{ textAlign: "left", margin: "30px 0" }}>
          <Heading as='h3' size='lg'>Trending cities</Heading>
          <Text fontSize="md" margin="10px 0">Book flights to a destination popular with travellers from India</Text>
        </Box>
        <Box style={{ textAlign: "left", margin: "30px 0" }}>
          <Heading as='h3' size='lg'>Fly worldwide with Reserve Now</Heading>
          <Text fontSize="md" margin="10px 0">Flights from wherever you are to wherever you want to go</Text>
        </Box>
        <Box style={{ textAlign: "left", margin: "30px 0" }}>
          <Heading as='h3' size='lg'>Frequently asked questions</Heading>
          <SimpleGrid minChildWidth='300px' spacing='40px' margin="20px 0">
            <Box style={{ border: "2px solid #ededed", borderRadius: "10px", padding: "10px" }} >
              <Text style={{ fontWeight: "bold" }}>How do I find the cheapest flights on Reserve Now?</Text>
              <Text>You can sort flights by price to see them from cheapest to most expensive. To find the cheapest flights, you also need to consider factors such as when you are booking and when you want to travel.</Text>
            </Box>
            <Box style={{ border: "2px solid #ededed", borderRadius: "10px", padding: "10px" }} >
              <Text style={{ fontWeight: "bold" }}>Can I book one way flight tickets on Reserve Now?</Text>
              <Text>Yes, you can book one way, round trip and multi city flights on our site.</Text>
            </Box>
            <Box style={{ border: "2px solid #ededed", borderRadius: "10px", padding: "10px" }} >
              <Text style={{ fontWeight: "bold" }}>How far in advance can I book a flight?</Text>
              <Text>You can book a flight up to one year before your departure date.</Text>
            </Box>
            <Box style={{ border: "2px solid #ededed", borderRadius: "10px", padding: "10px" }} >
              <Text style={{ fontWeight: "bold" }}>Do flights get cheaper closer to departure?</Text>
              <Text>Generally, flight prices are more likely to increase the closer you get to your flight date.</Text>
            </Box>
            <Box style={{ border: "2px solid #ededed", borderRadius: "10px", padding: "10px" }} >
              <Text style={{ fontWeight: "bold" }}>What is a flexible ticket?</Text>
              <Text>A flexible ticket allows you to change your flight with the same airline company by only paying the fare and tax difference. It can only be used for one confirmed change. You are able to add the flexible ticket when booking your flight.</Text>
            </Box>
            <Box style={{ border: "2px solid #ededed", borderRadius: "10px", padding: "10px" }} >
              <Text style={{ fontWeight: "bold" }}>Does Reserve Now charge credit card fees?</Text>
              <Text>No, we don't charge any credit card fees. You can always see exactly what you’re paying for in the price breakdown when you review your booking.</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      <div style={{ position: "relative" }}>
        <Button
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            left: "unset",
            animation: " 0.4s ease-out 0s 1 normal forwards running animation-1dir8z8",
            fontSize: "16px",
            fontWeight: "lighter",
            backgroundColor: "rgb(245, 245, 245)",
            borderRadius: "16px",
            padding: "8px 16px",
            color: "rgb(26, 26, 26)",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 1px",
            height: "36px",
          }}
        >
          Give Feedback
        </Button>
      </div>
        </>
    )
}

export default HomeContent;