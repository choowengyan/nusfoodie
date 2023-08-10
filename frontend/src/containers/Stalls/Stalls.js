import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from "axios";

import ResponsiveAppBar from '../navbar';
import './Stalls.css';
import StallListings from '../components/cards/StallListings';

const styles = {
    paperContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFC95F'
    }
};

const url = 'http://34.126.91.148:5001/api'

const Stalls = () => {
    const [stalls, setStalls] = useState([]);
    const [establishmentName, setEstablishmentName] = useState('');

    useEffect(() => {
        const path = window.location.pathname;
        const parts = path.split('/');
        const establishmentId = parts[2];

        // Stall listings from specific establishment
        //axios.get(`http://localhost:5001/api/establishments/${establishmentId}/stalls`)
        axios.get(`${url}/establishments/${establishmentId}/stalls`)
            .then((response) => {
                const data = response.data;
                setStalls(data);
                console.log(data)
            })
            .catch((error) => {
                console.error(`Error fetching data: ${error}`);
            });

        // list of establishments 
        //axios.get(`http://localhost:5001/api/establishments/${establishmentId}`)
        axios.get(`${url}/establishments/${establishmentId}`)
            .then((response) => {
                const data = response.data;
                console.log(data)
                setEstablishmentName(data.name);
            })
            .catch((error) => {
                console.error(`Error fetching data: ${error}`);
            });
    }, []);

    return (
        <Container fluid mx="3px" id="stalls" >
            <ResponsiveAppBar />

            <div className="flex-container align-content-sm-stretch" id="stalls-header" style={Object.assign({}, styles.paperContainer, { width: "100%", margin: 0, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' })}>
                <h1 style={{ fontSize: "28px", textAlign: 'center' }}>{establishmentName}</h1>
                <div className="flex-container align-content-sm-stretch" id="stalls-subheader">
                    <h4 style={{ fontSize: "18px", paddingTop: '23px', paddingBottom: '29px' }}>Satisfy your cravings now!</h4>
                </div>
            </div>

            <div className="container">
                <div className="subtitile">
                    <p style={{ fontSize: "16px", paddingTop: "1em", paddingBottom: '2em', textAlign: 'left', paddingLeft: '9em' }}>Here are the list of stalls available in {establishmentName}!</p>
                </div>

                <StallListings stalls={stalls} />
            </div>
        </Container>
    )
}

export default Stalls;