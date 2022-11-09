import './EmploymentHistory.css';
import { Fragment } from 'react';
import { EMPLOYMENT_HISTORY } from '../constants';

export default function EmploymentHistory() {
    return (
        <Fragment>
            <h1>Employment History</h1>
            {EMPLOYMENT_HISTORY.employmentHistory.map(
                (employmentRecord, index) => {
                    return (
                        <div className="employment-record" key={index}>
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
                                {employmentRecord.achievements.map(
                                    (achievement, index) => (
                                        <li key={`achievement ${index}`}>
                                            {achievement}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    );
                }
            )}
        </Fragment>
    );
}
