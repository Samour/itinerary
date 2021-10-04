import React, {useEffect} from 'react';
import {AppState} from "src/store/models/AppState";
import {ItinerarySummaryDto} from "src/models/ItineraryDto";
import {Container, Grid} from "@mui/material";
import {useSelector} from "react-redux";
import ItinerarySummary from "./ItinerarySummary";
import {IItineraryService, useItineraryService} from "src/services/ItineraryService";

const selector = (state: AppState): ItinerarySummaryDto[] => state.itinerariesList.itineraries;

const ItinerariesList = (): JSX.Element => {
    const itineraryService: IItineraryService = useItineraryService();
    const itineraries: ItinerarySummaryDto[] = useSelector(selector);

    useEffect(() => {
        itineraryService.loadItinerariesList();
    }, []);

    return (
        <Container id='ItinerariesList-Container'>
            <Grid container>
                {itineraries.map((i) => (
                    <Grid item xs={12}>
                        <ItinerarySummary key={i.id} itinerary={i}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ItinerariesList;
