import './Body.css';
import React, { Suspense } from 'react';
import EmploymentHistory from '../employmentHistory/EmploymentHistory';
import Education from '../education/Education';
import Skills from '../skills/Skills';

export default function Body() {
    const ProfileComponent = React.lazy(() => {
        if (process.env.REACT_APP_JOB_TITLE === 'Web Developer') {
            return import('../profile/FrontEndProfile');
        }
        if (process.env.REACT_APP_JOB_TITLE === 'Software Engineer') {
            return import('../profile/FullStackProfile');
        }
        return import('../profile/ProfileNotFound');
    });

    return (
        <main className="body">
            <div className="resume-body__primary">
                <section>
                    <Suspense fallback={<div>Loading Profile...</div>}>
                        <ProfileComponent />
                    </Suspense>
                </section>
                <hr />
                <section>
                    <EmploymentHistory />
                </section>
                <hr />
                <section>
                    <Education />
                </section>
            </div>
            <div className="resume-body__secondary">
                <section>
                    <Skills />
                </section>
            </div>
        </main>
    );
}
