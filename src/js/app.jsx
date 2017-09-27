import React from "react";
import Header from "./components/header";
import TicketList from "./components/ticket-list";

const App = () => {
    return(
        <div>
            <Header/>
            <TicketList/>
        </div>
    );
};

export default App;