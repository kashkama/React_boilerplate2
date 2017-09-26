import React from "react";
import { PropTypes } from "prop-types";

function Ticket(props) {
    return(
        <div>
            <h3>{props.location} - {props.names}</h3>
            <p><em>{props.issues}</em></p>
            <p>{props.timestamp}</p>
            <hr/>
        </div>
    );
}

Ticket.propTypes = {
    names: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    issues: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
};

export default Ticket;