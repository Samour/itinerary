import React from 'react';
import {useSelector} from "react-redux";
import {Button, Card, CardContent, Grid, Modal} from "@mui/material";
import {AppState} from "src/store/models/AppState";
import {ItineraryToDeleteState} from "src/store/models/ItinerariesListState";
import {useItineraryService} from "src/services/ItineraryService";

const selector = (state: AppState): ItineraryToDeleteState => state.itinerariesList.itineraryToDelete;

const DeleteConfirmation = (): JSX.Element => {
    const itineraryService = useItineraryService();
    const {openConfirmationModal, itinerary, deleteInProgress} = useSelector(selector);

    const closeModal = () => itineraryService.closeDeleteModal();
    const confirmDelete = () => itineraryService.confirmItineraryDelete(itinerary?.id as string);

    return (
        <Modal open={openConfirmationModal} onClose={closeModal}>
            <Card className='modal-content'>
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} className='modal-text'>
                            Are you sure you want to delete <strong>{itinerary?.name}</strong>?
                        </Grid>
                        <Grid item xs={12} className='buttons-row modal-buttons'>
                            <Button color='secondary' disabled={deleteInProgress} onClick={closeModal}>Cancel</Button>
                            <Button
                                variant='contained'
                                disabled={deleteInProgress}
                                color='error'
                                onClick={confirmDelete}>
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Modal>
    );
};

export default DeleteConfirmation;
