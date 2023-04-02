import Flight from "./Flight"
import { useEffect } from "react";
import Pagination from "./Pagination";


function FlightList({filteredlist, searchData, handlePageChange, totalPages, currentPage}){

    return(
        <>
        {filteredlist.map((flight)=><Flight flight={flight} key={flight.id} searchData={searchData}/>)}
        {totalPages&&(<Pagination totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage}/>)}
        </>
    )
}
export default FlightList;