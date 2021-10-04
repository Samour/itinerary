import React from 'react';
import {Card, CardContent, Grid, IconButton} from "@mui/material";
import {Edit} from "@mui/icons-material";
import {ItinerarySummaryDto} from "src/models/ItineraryDto";
import TimeDisplay from "src/components/shared/TimeDisplay";

interface Props {
    itinerary: ItinerarySummaryDto;
}

const ItinerarySummary = ({itinerary}: Props): JSX.Element => (
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
                <Grid item xs={3} className='text-align-right'>
                    <IconButton>
                        <Edit/>
                    </IconButton>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

export default ItinerarySummary;
