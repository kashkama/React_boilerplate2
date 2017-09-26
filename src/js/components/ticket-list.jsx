import React from "react";
import Ticket from "./ticket";

function TicketList(props) {
    return(
        <Ticket
            location="3a"
            names="Thato and Haley"
            issues="Firebase won't save record"
            timestamp="26th Sep, 2017"
        />
    );
}

export default TicketList;