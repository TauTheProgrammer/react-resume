import './Header.css';
import { ACTIVE_PROFILE, HEADER } from '../../constants';
import Details from './details/Details';

export default function Header() {
    return (
        <header className="header">
            <div className="header_name">Ryan Scott</div>
            <div className="header_position">{HEADER[ACTIVE_PROFILE]}</div>
            <hr />
            <Details />
        </header>
    );
}