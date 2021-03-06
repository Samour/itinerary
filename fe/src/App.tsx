import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {LocalizationProvider} from "@mui/lab";
import DateAdaptor from '@mui/lab/AdapterDayjs';
import auLocale from 'dayjs/locale/en-au';
import ItinerariesList from "./components/ItinerariesList";
import CreateItinerary from "./components/CreateItinerary";
import ItineraryDetail from "./components/ItineraryDetail";

const App = (): JSX.Element => (
    <LocalizationProvider dateAdapter={DateAdaptor} locale={auLocale}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <ItinerariesList/>
                </Route>
                <Route path='/create-itinerary'>
                    <CreateItinerary/>
                </Route>
                <Route path='/itinerary/:id'>
                    <ItineraryDetail/>
                </Route>
            </Switch>
        </BrowserRouter>
    </LocalizationProvider>
);

export default App;
