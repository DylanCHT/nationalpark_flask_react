import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import 'react-horizontal-scrolling-menu/dist/styles.css';

import { Header } from "./Componets/Header"; // Importing Header component
import Card from "./Componets/Card"; // Importing Card component
import Top_banner from './Componets/Top_banner' // Importing Top_banner component
import './Style/App.css'; // Importing App CSS file
import './Style/Top_banner.css'; // Importing Top_banner CSS file

function App() {
    const [data, setData] = useState([]); // State for holding data from API
    const [selected, setSelected] = useState(""); // State for tracking selected item

    useEffect(() => {
    fetchAPI(); // Fetch data from API when component mounts
    }, []);

    // Function to fetch data from API
    const fetchAPI = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8080/api/parks'); // Flask backend endpoint
        setData(response.data); // Set fetched data to state
        // console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error); // Log error if API request fails
    }};

    // Function to handle item click
    const handleItemClick = (itemId) => () => setSelected(itemId);

    return (
        <div className="App">
            <div className={"BgImage"}>
                <Header />
                <Top_banner/>

                <ScrollMenu scrollContainerClassName={"ScrollMenuContainer"}>{
                    data.map((d, index) => (
                    <div key={index}>
                        <Card
                            title={d.category}
                            list={d.park_list}
                            itemId={index}
                            key={index}
                            onClick={handleItemClick(index)}
                            selected={index === selected}
                        />
                    </div>
                ))}
                </ScrollMenu>
            </div>
        </div>
    );
}
export default App;
