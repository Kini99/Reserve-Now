import Flight from "./Flight"
import { useEffect } from "react";


function FlightList({filteredlist, searchData}){

    return(
        <>
        {filteredlist.map((flight)=><Flight flight={flight} key={flight.id} searchData={searchData}/>)}
        Pagination
        </>
    )
}
export default FlightList;