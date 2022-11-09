import './Education.css';
import React from 'react';
import { EDUCATION } from '../constants';

export default function Education() {
    return (
        <>
            <h1>Education History</h1>
            {EDUCATION.education.map((educationRecord) => (
                <div
                    className="education-record"
                    key={educationRecord.institution}
                >
                    <div className="education-record__header">
                        <div className="header__title">{`${educationRecord.majorOrDegree}, ${educationRecord.institution}`}</div>
                        <div>{educationRecord.location}</div>
                    </div>
                    <div>{educationRecord.duration}</div>
                </div>
            ))}
        </>
    );
}
