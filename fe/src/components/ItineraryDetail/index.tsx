import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Button, Container, Grid} from "@mui/material";
import {useNavigateToHandler} from "src/navigation";
import {RouteLocations} from "src/models/RouteLocations";
import {useItineraryService} from "src/services/ItineraryService";
import ItinerarySummaryDetails from "./ItinerarySummaryDetails";

const ItineraryDetail = (): JSX.Element => {
    const {id} = useParams<{ id: string }>();
    const itineraryService = useItineraryService();

    useEffect(() => {
        itineraryService.loadItineraryDetails(id);
    }, [id]);

    const backButton = useNavigateToHandler(RouteLocations.ITINERARIES_LIST);

    return (
        <Container maxWidth='md' className='screen-container'>
            <Grid container spacing='15px'>
                <Grid item xs={12}>
                    <ItinerarySummaryDetails/>
                </Grid>
                <Grid item xs={12}>
                    <Button color='secondary' onClick={backButton}>Back</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ItineraryDetail;
