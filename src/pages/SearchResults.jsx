import NavBar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import { Box, Text, Heading, Button } from "@chakra-ui/react";



function SearchResults(){
    return(
        <>
        <Header/>
        <NavBar />
        <Box padding="20px 200px" ><Search/></Box>

<div style={{display:"flex", padding:"20px 200px"}}> 
<div>
{/* filter box */}
</div>
<div>
{/* result box */}
</div>
</div>

        <Footer />
        </>
    )
}

export default SearchResults;