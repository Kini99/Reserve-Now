import Flight from "./Flight"
import { useEffect } from "react";


function FlightList({filteredlist}){
console.log("flightlist page")
console.log(filteredlist)
    return(
        <>
        {filteredlist.map((flight)=><Flight {...flight} key={flight.id}/>)}
        Pagination
        </>
    )
}
export default FlightList;