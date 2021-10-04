import React from 'react';
import {useHistory} from "react-router-dom";
import {Button} from "@mui/material";
import {RouteLocations} from "src/models/RouteLocations";

const CancelButton = (): JSX.Element => {
    const history = useHistory();

    const handleClick = (e: React.MouseEvent) => {
        history.push(RouteLocations.ITINERARIES_LIST);

        e.preventDefault();
        return false;
    };

    return (
        <Button href={RouteLocations.ITINERARIES_LIST} color='secondary' onClick={handleClick}>
            Cancel
        </Button>
    );
};

export default CancelButton;
