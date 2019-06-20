import React from 'react';

import { useLoadScript } from "utils/hooks";

export const LoadScript = props => {
    const state = useLoadScript(props);
    return props.children(state);
};
