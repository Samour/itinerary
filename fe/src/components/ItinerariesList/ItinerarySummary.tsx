import React from 'react';
import {Card, CardContent, Grid, IconButton} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";
import {ItinerarySummaryDto} from "src/models/ItineraryDto";
import TimeDisplay from "src/components/shared/TimeDisplay";
import {useItineraryService} from "src/services/ItineraryService";
import {RouteLocations} from "src/models/RouteLocations";
import {useNavigateToHandler} from "src/navigation";

interface Props {
    itinerary: ItinerarySummaryDto;
}

const ItinerarySummary = ({itinerary}: Props): JSX.Element => {
    const itineraryService = useItineraryService();

    const detailLocation = `${RouteLocations.ITINERARY_DETAIL}/${itinerary.id}`;
    const navigateToDetail = useNavigateToHandler(detailLocation)
    const openDeleteModal = () => itineraryService.openDeleteModal(itinerary);

    return (
        <Card>
            <CardContent>
                <Grid container>
                    <Grid item xs={4}>
                        {itinerary.name}
                    </Grid>
                    <Grid item xs={4} className='secondary-text'>
                        <TimeDisplay time={itinerary.startTime}/>
                        {' - '}
                        <TimeDisplay time={itinerary.endTime}/>
                    </Grid>
                    <Grid item xs={3} className='text-align-right buttons-row'>
                        <IconButton href={detailLocation} onClick={navigateToDetail}>
                            <Edit/>
                        </IconButton>
                        <IconButton color='error' onClick={openDeleteModal}>
                            <Delete/>
                        </IconButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ItinerarySummary;
