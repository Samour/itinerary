import React from 'react';
import {useSelector} from "react-redux";
import {Button, Container, Grid, TextField} from "@mui/material";
import {DatePicker} from "@mui/lab";
import {Dayjs} from "dayjs";
import {AppState} from "src/store/models/AppState";
import {CreateItineraryState} from "src/store/models/CreateItineraryState";
import {useCreateItineraryService} from "src/services/CreateItineraryService";
import CancelButton from "./CancelButton";

const selector = (state: AppState): CreateItineraryState => state.createItinerary;

const CreateItinerary = (): JSX.Element => {
    const createItineraryService = useCreateItineraryService();
    const formState = useSelector(selector);

    return (
        <Container maxWidth='sm' className='screen-container'>
            <h2>Create Itinerary</h2>
            <Grid container spacing='15px'>
                <Grid item xs={6}>
                    <TextField fullWidth label='Name' required
                               value={formState.name.value || ''}
                               error={formState.name.error}
                               helperText={formState.name.errorMessage}
                               onChange={(e) => createItineraryService.setName(e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label='Description' multiline
                               value={formState.description.value || ''}
                               error={formState.description.error}
                               helperText={formState.description.errorMessage}
                               onChange={(e) => createItineraryService.setDescription(e.target.value)}/>
                </Grid>
                <Grid item xs={6}>
                    <DatePicker
                        label='Start date'
                        value={formState.startTime.value}
                        onChange={(d: Dayjs | null) => createItineraryService.setStartTime(d)}
                        renderInput={(props) =>
                            <TextField {...props}
                                       required
                                       error={formState.startTime.error}
                                       helperText={formState.startTime.errorMessage}/>
                        }/>
                </Grid>
                <Grid item xs={6}>
                    <DatePicker
                        label='End date'
                        value={formState.endTime.value}
                        onChange={(d: Dayjs | null) => createItineraryService.setEndTime(d)}
                        renderInput={(props) =>
                            <TextField {...props}
                                       required
                                       error={formState.endTime.error}
                                       helperText={formState.endTime.errorMessage}/>
                        }/>
                </Grid>
                <Grid item xs={12} className='buttons-row'>
                    <CancelButton/>
                    <Button variant='contained' onClick={() => createItineraryService.validateAndSave()}>Save</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CreateItinerary;
