import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Container, Grid} from "@mui/material";
import {AppState} from "src/store/models/AppState";
import {ItinerarySummaryDto} from "src/models/ItineraryDto";
import {IItineraryService, useItineraryService} from "src/services/ItineraryService";
import ItinerarySummary from "./ItinerarySummary";

import CreateItineraryButton from "./CreateItineraryButton";
import DeleteConfirmation from "./DeleteConfirmation";

const selector = (state: AppState): ItinerarySummaryDto[] => state.itinerariesList.itineraries;

const ItinerariesList = (): JSX.Element => {
    const itineraryService: IItineraryService = useItineraryService();
    const itineraries: ItinerarySummaryDto[] = useSelector(selector);

    useEffect(() => {
        itineraryService.loadItinerariesList();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container className='screen-container'>
            <Grid container>
                <Grid item xs={6}>
                    <h2>My Itineraries</h2>
                </Grid>
                <Grid item xs={6}>
                    <div id='ItinerariesList-CreateButton'>
                        <CreateItineraryButton/>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        {itineraries.map((i) => (
                            <Grid key={i.id} item xs={12}>
                                <ItinerarySummary itinerary={i}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <DeleteConfirmation/>
        </Container>
    );
};

export default ItinerariesList;
