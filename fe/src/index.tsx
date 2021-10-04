import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import './index.css';
import App from './App';
import store from './store';

dayjs.extend(utc);
dayjs.extend(timezone);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
