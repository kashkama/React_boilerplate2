import React from "react";
import { PropTypes } from "prop-types";

function Ticket({names, location, issues, timestamp}) {
    return(
        <div>
            <h3>{location} - {names}</h3>
            <p><em>{issues}</em></p>
            <p>{timestamp}</p>
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