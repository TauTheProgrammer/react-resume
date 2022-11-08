import './Body.css';
import Profile from "../profile/Profile";
import EmploymentHistory from "../employmentHistory/EmploymentHistory";
import Education from "../education/Education";
import Skills from '../skills/Skills';

export default function Body() {
    return (
        <main className="body">
            <div className="resume-body__primary">
                <section>
                    <Profile />
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