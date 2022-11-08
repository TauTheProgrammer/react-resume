import { Fragment } from "react";
import { PROFILE, ACTIVE_PROFILE } from "../../../constants";

export default function Profile() {
    return (
        <Fragment>
            <h1>Profile</h1>
            <div className="profile-content">
                <p>
                    {PROFILE.profileSummary[ACTIVE_PROFILE]}
                </p>
            </div>
        </Fragment>
    );
}