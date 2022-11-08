import { Fragment } from "react";

export default function ProfileNotFound() {
    return (
        <Fragment>
            <h1>Profile</h1>
            <div className="profile-content">
                <p>
                    {`Profile not found for job title {${process.env.REACT_APP_JOB_TITLE}}`}
                </p>
            </div>
        </Fragment>
    );
}