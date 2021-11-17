import React from 'react';
import {Button, Container, Grid, TextField} from "@mui/material";
import {DatePicker} from "@mui/lab";
import {Dayjs} from "dayjs";
import CancelButton from "./CancelButton";
import {useCreateItineraryForm} from "./createItineraryForm";

const CreateItinerary = (): JSX.Element => {
    const {
        name,
        setName,
        description,
        setDescription,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        validateAndSave,
    } = useCreateItineraryForm();

    return (
        <Container maxWidth='sm' className='screen-container'>
            <h2>Create Itinerary</h2>
            <Grid container spacing='15px'>
                <Grid item xs={6}>
                    <TextField fullWidth label='Name' required
                               value={name.value || ''}
                               error={name.error}
                               helperText={name.errorMessage}
                               onChange={(e) => setName(e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label='Description' multiline
                               value={description.value || ''}
                               error={description.error}
                               helperText={description.errorMessage}
                               onChange={(e) => setDescription(e.target.value)}/>
                </Grid>
                <Grid item xs={6}>
                    <DatePicker
                        label='Start date'
                        value={startTime.value}
                        onChange={(d: Dayjs | null) => setStartTime(d)}
                        renderInput={(props) =>
                            <TextField {...props}
                                       required
                                       error={startTime.error}
                                       helperText={startTime.errorMessage}/>
                        }/>
                </Grid>
                <Grid item xs={6}>
                    <DatePicker
                        label='End date'
                        value={endTime.value}
                        onChange={(d: Dayjs | null) => setEndTime(d)}
                        renderInput={(props) =>
                            <TextField {...props}
                                       required
                                       error={endTime.error}
                                       helperText={endTime.errorMessage}/>
                        }/>
                </Grid>
                <Grid item xs={12} className='buttons-row'>
                    <CancelButton/>
                    <Button variant='contained' onClick={() => validateAndSave()}>Save</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CreateItinerary;
