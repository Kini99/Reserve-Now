import { Box, Text, Heading, Tabs, Tab, TabList, TabPanels, TabPanel, SimpleGrid, Button } from "@chakra-ui/react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import Search from "../components/Search";
import FlightCarousel from "./FlightCarousel";

function HomeContent(){
  let internationalData = [
    {
        imageurl: "https://q-xx.bstatic.com/xdata/images/city/square210/674773.jpg?k=f65fb36a6b12a3f09a07232ef7946deb46871c0d5a308d3e16ff127d61233f41&o=",
        destination: "Delhi to Male City",
        dates: "Apr 4 - Apr 11 · Round trip",
    },
    {
        imageurl: "https://q-xx.bstatic.com/xdata/images/city/square210/620027.jpg?k=3e415bb694a1a0145529dad3242573d0d52364bc57bae824b5990bf9c2fabc04&o=",
        destination:"Mumbai to Bangkok" ,
        dates: "Apr 2 - Apr 9 · Round trip",
    },
    {
        imageurl: "https://q-xx.bstatic.com/xdata/images/city/square210/619666.jpg?k=504b97635641d489438feb63780d4ae80ce8a2fd08a1fcb6183485738a87e6ad&o=",
        destination: "Hyderabad to Singapore",
        dates: "Apr 3 - Apr 10 · Round trip",
    },
    {
        imageurl: "https://q-xx.bstatic.com/xdata/images/city/square210/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=",
        destination: "Banglore to Dubai",
        dates: "Apr 4 - Apr 11 · Round trip",
    },
    {
        imageurl: "https://q-xx.bstatic.com/xdata/images/city/square210/688060.jpg?k=57065d3be37fb33083964a32334c077cf3cbc52eac00202e887d8c20636514e6&o=",
        destination: "Chennai to Kuta",
        dates: "Apr 5 - Apr 12 · Round trip",
    },
    {
        imageurl: "https://q-xx.bstatic.com/xdata/images/city/square210/613094.jpg?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o=",
        destination: "Delhi to London",
        dates: "Apr 5 - Apr 12 · Round trip",
    },
    
];
let domesticData = [
  {
      imageurl: "https://q-xx.bstatic.com/xdata/images/city/square210/684533.jpg?k=efaef4796fa555481ddabf686c3fc66433b50ba69c936d6f702b1125b1d06748&o=",
      destination: "Delhi to Bangalore",
      dates: "Apr 7 - Apr 14 · Round trip",
  },
  {
      imageurl: "https://q-xx.bstatic.com/xdata/images/city/square210/684757.jpg?k=5cd52ccbba6806c371689dab0da9678a5c1f4dcef697ea976a000f5e53ac4f18&o=",
      destination:"Mumbai to Panaji" ,
      dates: "Apr 2 - Apr 9 · Round trip",
  },
  {
      imageurl: "https://q-xx.bstatic.com/xdata/images/city/square210/684727.jpg?k=a6fd59b0c31df52ae2a907dcf2441c7842bb56e2e68d89bffd2398024c0812d3&o=",
      destination: "Hyderabad to Chennai",
      dates: "Apr 3 - Apr 10 · Round trip",
  },
  {
      imageurl: "https://q-xx.bstatic.com/xdata/images/city/square210/971345.jpg?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&o=",
      destination: "Banglore to Mumbai",
      dates: "Apr 7 - Apr 14 · Round trip",
  },
  {
      imageurl: "https://q-xx.bstatic.com/xdata/images/city/square210/684569.jpg?k=a5ec6ac66c784664fb76a1f709993769fd7875bfcfdbc2c5efebb72f3782815f&o=",
      destination: "Delhi to Cochin",
      dates: "Apr 1 - Apr 8 · Round trip",
  },
  {
      imageurl: "https://q-xx.bstatic.com/xdata/images/city/square210/684951.jpg?k=50cd4cdfdf3c1b747f69880497ec06b275c3d04cf28b6d75c4544a81fe2f24d2&o=",
      destination: "Banglore to Hyderabad",
      dates: "Apr 6 - Apr 13 · Round trip",
  },
  
]

let trendingData=[
  {
    imageurl:"https://q-xx.bstatic.com/xdata/images/city/square210/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=",
    destination:"Dubai, United Arab Emirates",
    dates:"5 Apr - 12 Apr · Round trip"
  },
  {
    imageurl:"https://q-xx.bstatic.com/xdata/images/city/square210/684757.jpg?k=5cd52ccbba6806c371689dab0da9678a5c1f4dcef697ea976a000f5e53ac4f18&o=",
    destination:"Panaji, India",
    dates:"3 Apr - 10 Apr · Round trip"
  },
  {
    imageurl:"https://q-xx.bstatic.com/xdata/images/city/square210/684764.jpg?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o=",
    destination:"New Delhi, India",
    dates:"8 Apr - 15 Apr · Round trip"
  },
  {
    imageurl:"https://q-xx.bstatic.com/xdata/images/city/square210/613094.jpg?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o=",
    destination:"London, United Kingdom",
    dates:"4 Apr - 11 Apr · Round trip"
  },
  {
    imageurl:"https://q-xx.bstatic.com/xdata/images/city/square210/976782.jpg?k=35477ee3d4b1090e3c1fbe9472cee3f209c711c4787ffbbfea7ab9409257d289&o=",
    destination:"New York, United States",
    dates:"3 Apr - 10 Apr · Round trip"
  },
  {
    imageurl:"https://q-xx.bstatic.com/xdata/images/city/square210/620027.jpg?k=3e415bb694a1a0145529dad3242573d0d52364bc57bae824b5990bf9c2fabc04&o=",
    destination:"Bangkok, Thailand",
    dates:"4 Apr - 11 Apr · Round trip"
  },
  {
    imageurl:"https://q-xx.bstatic.com/xdata/images/city/square210/688060.jpg?k=57065d3be37fb33083964a32334c077cf3cbc52eac00202e887d8c20636514e6&o=",
    destination:"Kuta, Indonesia",
    dates:"7 Apr - 14 Apr · Round trip"
  },
]

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
            </TabList>

            <TabPanels>
              <TabPanel>
               <FlightCarousel data={domesticData}/>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Tabs>
            <TabList>
              <Tab>International</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
               <FlightCarousel data={internationalData}/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box style={{ textAlign: "left", margin: "30px 0" }}>
          <Heading as='h3' size='lg'>Trending cities</Heading>
          <Text fontSize="md" margin="10px 0">Book flights to a destination popular with travellers from India</Text>
          <FlightCarousel data={trendingData}/>
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