import './Header.css';
import { ACTIVE_PROFILE, HEADER } from '../constants';
import HeaderDetails from '../headerDetails/HeaderDetails';

export default function Header() {
    return (
        <header className="header">
            <div className="header_name">Ryan Scott</div>
            <div className="header_position">{HEADER[ACTIVE_PROFILE]}</div>
            <hr />
            <HeaderDetails />
        </header>
    );
}