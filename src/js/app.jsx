import React from "react";
import Header from "./components/header";
import TicketList from "./components/ticket-list";

function App(props) {
    return(
        <div>
            <Header/>
            <TicketList/>
        </div>
    );
}

export default App;