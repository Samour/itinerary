import React from "react";
import {useHistory} from "react-router-dom";

export const useNavigateToHandler = (location: string) => {
    const history = useHistory();

    return (e: React.UIEvent): boolean => {
        history.push(location);

        e.preventDefault();
        return false;
    };
};
