import React, {ReactElement} from 'react';
import {useSelector} from "react-redux";
import {Grid, Skeleton} from "@mui/material";
import {AppState} from "src/store/models/AppState";
import {ItineraryDetailState} from "src/store/models/ItineraryDetailState";
import TimeDisplay from "../shared/TimeDisplay";

interface FieldDetailProps {
    label: string;
    loading: boolean;
    value: string | ReactElement | undefined;
}

const FieldDetail = ({label, loading, value}: FieldDetailProps): JSX.Element => {
    const valueEl = () => {
        if (loading) {
            return <Skeleton/>;
        } else {
            return value;
        }
    };

    return (
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={6}>
                    <strong>{label}</strong>
                </Grid>
                <Grid item xs={6}>
                    {valueEl()}
                </Grid>
            </Grid>
        </Grid>
    );
};

const selector = (state: AppState): ItineraryDetailState => state.itineraryDetail;

const ItinerarySummaryDetails = (): JSX.Element => {
    const {loading, itinerary} = useSelector(selector);

    return (
        <Grid container>
            <FieldDetail label='Name' loading={loading} value={itinerary?.name}/>
            <FieldDetail label='Description' loading={loading} value={itinerary?.description}/>
            <FieldDetail label='Start time' loading={loading} value={<TimeDisplay time={itinerary?.startTime}/>}/>
            <FieldDetail label='End time' loading={loading} value={<TimeDisplay time={itinerary?.endTime}/>}/>
        </Grid>
    );
};

export default ItinerarySummaryDetails;
