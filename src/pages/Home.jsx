import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/Navbar";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";
import HomeContent from "../components/HomeContent";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";



function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [flightlist, setFlightlist] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(()=>{
  //   fetch(`https://reserve-now-server.onrender.com/flights`)
  //   .then(res=>res.json())
  //   .then(data=>setFlightlist(data))
  //   .catch((error) => console.log(error))
  // },[])

  const handleSearchSubmit = async (formData) => {
    setIsLoading(true);

    console.log("inside function")
    console.log(formData.from)


    if (formData.from == "Delhi") {
      formData.from = "DEL";
    } else if (formData.from == "Goa") {
      formData.from = "GOI";
    } else if (formData.from == "Mumbai") {
      formData.from = "BOM";
    }

    if (formData.to == "Delhi") {
      formData.to = "DEL";
    } else if (formData.to == "Goa") {
      formData.to = "GOI";
    } else if (formData.to == "Mumbai") {
      formData.to = "BOM";
    }
    try {
      // Make API request with form data
      // and set the result state.

      fetch(`https://reserve-now-server.onrender.com/flights?from=${formData.from}&to=${formData.to}`)
        .then(res => res.json())
        .then(data => setFlightlist(data))
        .catch((error) => console.log(error))
      setResult(true);
      setSearchData(formData);
      setTotalPages(Math.ceil(flightlist.length / 8));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    handleSearchSubmit(searchData);
  }

  return (
    <>
      <Header />
      <NavBar />
      <Box padding="20px 200px" textAlign={"left"} >
        <Heading as="h1" >Compare and book flights with ease</Heading>
        <Text fontSize="md" margin="10px 0">Discover your next dream destination</Text>
        <Search handleSearchSubmit={handleSearchSubmit} isLoading={isLoading} />
        {isLoading ? (
          <div>Loading...</div>
        ) : result ? (
          <SearchResults flightlist={flightlist} searchData={searchData} isLoading={isLoading} handleSearchSubmit={handleSearchSubmit} handlePageChange={handlePageChange} totalPages={totalPages} currentPage={currentPage} />
        ) : (
          <HomeContent />
        )}
      </Box>
      <Footer />
    </>
  )
}

export default Home;