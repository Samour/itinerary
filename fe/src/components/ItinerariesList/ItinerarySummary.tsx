import React from 'react';
import {Card, CardContent, Grid, IconButton} from "@mui/material";
import {Edit} from "@mui/icons-material";
import {ItinerarySummaryDto} from "src/models/ItineraryDto";

interface Props {
    itinerary: ItinerarySummaryDto;
}

const ItinerarySummary = ({itinerary}: Props): JSX.Element => (
    <Card className='fullWidth'>
        <CardContent>
            <Grid container>
                <Grid item xs={8}>
                    {itinerary.name}
                </Grid>
                <Grid item xs={4}>
                    <IconButton>
                        <Edit/>
                    </IconButton>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

export default ItinerarySummary;
