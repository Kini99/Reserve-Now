import { useState, useEffect } from "react";
import classes from "../css/Dashboard.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer, Input, Select
} from "@chakra-ui/react";
import logo from "../images/RESERVE NOW CROPPED.png";

function Dashboard({ user }) {
  const [flights, setFlights] = useState([]);
  const [sorting, setSorting] = useState({ column: "", order: "" });
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`https://reserve-now-server.onrender.com/flights`)
      .then((res) => res.json())
      .then((data) => setFlights(data))
      .catch((error) => console.log(error));

  }, []);

  const sortTable = (column) => {
    const order = sorting.column === column && sorting.order === "asc" ? "desc" : "asc";
    setSorting({ column, order });
  };

  const filterTable = (event) => {
    const query = event.target.value;
    setQuery(query);
  };

  const sortedFlights = flights.slice().sort((a, b) => {
    if (sorting.order === "asc") {
      return a[sorting.column] < b[sorting.column] ? -1 : 1;
    } else {
      return a[sorting.column] > b[sorting.column] ? -1 : 1;
    }
  });

  const filteredFlights = sortedFlights.filter((flight) =>
    flight.from.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={classes.dashboardContainer}>
      <img src={logo} alt="Reserve Now" style={{ height: "50px" }} />
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <p style={{ fontSize: "1.2em", fontWeight: "bolder" }}>
            {flights.length}
          </p>
          <p>Total Flight(s)</p>
        </div>
        <div className={classes.card}>
          <p style={{ fontSize: "1.2em", fontWeight: "bolder" }}>
            {flights[0]?.departureDate}
          </p>
          <p> Departure Date</p>
        </div>
      </div>
      <h1 style={{fontWeight: "bolder", fontSize: "1.25em"}}>All Flight Details</h1>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1em" }}>
        <div style={{ display: "flex",justifyContent: "space-between", alignItems: "center" }}>
          <Input placeholder="Search Departure City" variant="flushed" size="sm" value={query} onChange={filterTable} style={{ marginRight: "0.5em" }} />
          <Select placeholder="Sort by" size="sm" value={sorting.column} onChange={(event) => sortTable(event.target.value)}>
            <option value="from">Departure City</option>
            <option value="to">Arrival City</option>
            <option value="price">Price</option>
          </Select>
        </div>
      </div>


      <TableContainer overflowX="hidden" style={{margin: "1em 0"}}>
        <Table variant="striped" colorScheme="teal" size="sm">
          <Thead>
            <Tr>
              <Th>Departure At</Th>
              <Th>Departure City</Th>
              <Th>Departure Date</Th>
              <Th>Duration</Th>
              <Th>Stops</Th>
              <Th>Arrival At</Th>
              <Th>Arrival City</Th>
              <Th>Arrival Date</Th>
              <Th>Operating Airline</Th>
              <Th>In Flight Amenities</Th>
              <Th>Fare</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredFlights!==[]?<>{filteredFlights.map((flight) => {
              return (
                <Tr key={flight.id}>
                  <Td style={{paddingInlineStart: "0.1em", paddingInlineEnd: "0.1em", textAlign: "center"}}>{flight.departureTime}</Td>
                  <Td>{flight.from}</Td>
                  <Td>{flight.departureDate}</Td>
                  <Td>{flight.totalTime}</Td>
                  <Td>{flight.type}</Td>
                  <Td>{flight.arrivalTime}</Td>
                  <Td>{flight.to}</Td>
                  <Td>{flight.arrivalDate}</Td>
                  <Td>{flight.airline}</Td>
                  <Td>{flight.amenities}</Td>
                  <Td>{flight.price}</Td>
                </Tr>
              );
            })}</>:<>{flights.map((flight) => {
              return (
                <Tr key={flight.id}>
                  <Td style={{paddingInlineStart: "0.1em", paddingInlineEnd: "0.1em", textAlign: "center"}}>{flight.departureTime}</Td>
                  <Td>{flight.from}</Td>
                  <Td>{flight.departureDate}</Td>
                  <Td>{flight.totalTime}</Td>
                  <Td>{flight.type}</Td>
                  <Td>{flight.arrivalTime}</Td>
                  <Td>{flight.to}</Td>
                  <Td>{flight.arrivalDate}</Td>
                  <Td>{flight.airline}</Td>
                  <Td>{flight.amenities}</Td>
                  <Td>{flight.price}</Td>
                </Tr>
              );
            })}</>}
            
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Dashboard;
