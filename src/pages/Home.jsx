import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/Navbar";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";
import HomeContent from "../components/HomeContent";
import {Box, Heading, Text} from "@chakra-ui/react";
import { useEffect, useState } from "react";



function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [flightlist,setFlightlist] =useState([]);
  const [searchData,setSearchData]=useState([]);

  console.log("Search Data:");
  console.log(searchData);

  useEffect(()=>{
  fetch(`http://localhost:8080/flights`)
  .then(res=>res.json())
  .then(data=>setFlightlist(data))
  .catch((error) => console.log(error))
},[])


  const handleSearchSubmit = async (formData) => {
    setIsLoading(true);
    try {
      // Make API request with form data
      // and set the result state
      setResult(true);
      setSearchData(formData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <Header />
      <NavBar />
      <Box padding="20px 200px" textAlign={"left"} backgroundColor="#f5f5f5" >
        <Heading as="h1">Compare and book flights with ease</Heading>
        <Text fontSize="md" margin="10px 0">Discover your next dream destination</Text>
        <Search handleSearchSubmit={handleSearchSubmit} />
        {isLoading ? (
          <div>Loading...</div>
        ) : result ? (
         <SearchResults flightlist={flightlist} searchData={searchData} />
        ) : (
          <HomeContent />
        )}
      </Box>
      <Footer />
    </>
  )
}

export default Home;