import React from 'react';

export default function ProfileNotFound() {
    return (
        <div id="ProfileNotFound">
            <h1>Profile</h1>
            <p>
                {`Profile not found for job title {${process.env.REACT_APP_JOB_TITLE}}`}
            </p>
        </div>
    );
}
