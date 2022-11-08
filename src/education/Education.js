import './Education.css';
import { Fragment } from "react";
import { EDUCATION } from "../constants";

export default function Education() {
    return (
        <Fragment>
            <h1>Education History</h1>
            {EDUCATION.education.map((educationRecord, index) => {
                return (
                    <div className="education-record" key={index}>
                        <div className="education-record__header">
                            <div className="header__title">{`${educationRecord.majorOrDegree}, ${educationRecord.institution}`}</div>
                            <div>{educationRecord.location}</div>
                        </div>
                        <div>{educationRecord.duration}</div>
                    </div>
                );
            })}
        </Fragment>
    )
}