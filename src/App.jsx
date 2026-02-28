/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/hero";
import MainSection from "./Components/MainSection/MainSection";
import ticketsData from "./data/tickets.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [tickets, setTickets] = useState([]);
    const [taskList, setTaskList] = useState([]);
    const [resolvedList, setResolvedList] = useState([]);

    useEffect(() => {
        // load all tickets on left side; start with no resolved tasks
        setTickets(ticketsData);
        setResolvedList([]);
    }, []);

    const handleStartTask = (ticket) => {
        // avoid duplicates
        if (taskList.find((t) => t.id === ticket.id)) return;
        setTaskList((prev) => [ticket, ...prev]);
        setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
        toast.info(`Added to in-progress: ${ticket.title}`);
    };

    const handleCompleteTask = (ticket) => {
        setTaskList((prev) => prev.filter((t) => t.id !== ticket.id));
        setResolvedList((prev) => [{ ...ticket, status: "resolved" }, ...prev]);
        toast.success(`Resolved: ${ticket.title}`);
    };

    return (
        <>
            <Navbar />
            <Hero
                inProgressCount={taskList.length}
                resolvedCount={resolvedList.length}
            />
            <MainSection
                tickets={tickets}
                onStartTask={handleStartTask}
                taskList={taskList}
                onCompleteTask={handleCompleteTask}
                resolvedList={resolvedList}
            />
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
            />
        </>
    );
}

export default App;
