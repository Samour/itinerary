import React from 'react';
import {Add} from "@mui/icons-material";
import {Button} from "@mui/material";
import {RouteLocations} from "src/models/RouteLocations";
import {useNavigateToHandler} from "src/navigation";

const CreateItineraryButton = (): JSX.Element => {
    const handleClick = useNavigateToHandler(RouteLocations.CREATE_ITINERARY);

    return (
        <Button href={RouteLocations.CREATE_ITINERARY} variant='contained' startIcon={<Add/>} onClick={handleClick}>
            Create Itinerary
        </Button>
    );
};

export default CreateItineraryButton;
