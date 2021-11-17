import React from 'react';
import {Button} from "@mui/material";
import {RouteLocations} from "src/models/RouteLocations";
import {useNavigateToHandler} from "src/navigation";

const CancelButton = (): JSX.Element => {
    const handleClick = useNavigateToHandler(RouteLocations.ITINERARIES_LIST);

    return (
        <Button href={RouteLocations.ITINERARIES_LIST} color='secondary' onClick={handleClick}>
            Cancel
        </Button>
    );
};

export default CancelButton;
