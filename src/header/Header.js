import './Header.css';
import HeaderDetails from '../headerDetails/HeaderDetails';

export default function Header() {
    return (
        <header className="header">
            <div className="header_name">Ryan Scott</div>
            <div className="header_position">
                {process.env.REACT_APP_JOB_TITLE || 'No Job Title Found'}
            </div>
            <hr />
            <HeaderDetails />
        </header>
    );
}
