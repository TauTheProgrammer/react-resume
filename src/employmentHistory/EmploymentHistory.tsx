import './EmploymentHistory.css';
import React from 'react';
import { EMPLOYMENT_HISTORY } from '../constants';

export default function EmploymentHistory() {
    return (
        <>
            <h1>Employment History</h1>
            {EMPLOYMENT_HISTORY.employmentHistory.map((employmentRecord) => (
                <div
                    className="employment-record"
                    key={employmentRecord.employer}
                >
                    <div className="employment-record__header">
                        <div className="companyName">
                            {employmentRecord.employer}
                        </div>
                        <div className="location">
                            {employmentRecord.location}
                        </div>
                    </div>
                    <div className="employment-record__duration">
                        {employmentRecord.duration}
                    </div>
                    <ul>
                        {employmentRecord.achievements.map((achievement) => (
                            <li key={achievement}>{achievement}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}
