import Flight from "./Flight"
import { useEffect } from "react";


function FlightList({filteredlist, searchData}){
console.log("flightlist page")
console.log(filteredlist)
    return(
        <>
        {filteredlist.map((flight)=><Flight flight={flight} key={flight.id} searchData={searchData}/>)}
        Pagination
        </>
    )
}
export default FlightList;