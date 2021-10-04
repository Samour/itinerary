import React from 'react';
import {useHistory} from "react-router-dom";
import {Add} from "@mui/icons-material";
import {Button} from "@mui/material";
import {RouteLocations} from "src/models/RouteLocations";

const CreateItineraryButton = (): JSX.Element => {
    const history = useHistory();

    const handleClick = (e: React.MouseEvent) => {
        history.push(RouteLocations.CREATE_ITINERARY);

        e.preventDefault();
        return false;
    };

    return (
        <Button href={RouteLocations.CREATE_ITINERARY} variant='contained' startIcon={<Add/>} onClick={handleClick}>
            Create Itinerary
        </Button>
    );
};

export default CreateItineraryButton;
