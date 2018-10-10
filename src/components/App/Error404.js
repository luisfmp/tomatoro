import React from 'react';

export const Error404 = ({ location }) => (
    <div>
        <p>404: No match for <code>{ location.pathname }</code></p>
    </div>
);
