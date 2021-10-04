import React, {useMemo} from 'react';
import dayjs from 'dayjs';

const DATE_FORMAT: string = 'DD/MM/YYYY';

interface Props {
    time: string; // ISO timestamp
}

const TimeDisplay = ({time}: Props): JSX.Element => {
    const formattedTime = useMemo(() =>
            dayjs(time).format(DATE_FORMAT),
        [time]);

    return <>{formattedTime}</>;
};

export default TimeDisplay;
