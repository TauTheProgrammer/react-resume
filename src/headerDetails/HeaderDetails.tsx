import './HeaderDetails.css';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';

export default function HeaderDetails() {
    return (
        <div className="details-list">
            <div className="details-list__detail">
                <EmailIcon className="detail__icon" sx={{ fontSize: 20 }} />
                <a href="mailto:rscott.72.h@gmail.com">rscott.72.h@gmail.com</a>
            </div>
            <div className="details-list__detail">
                <PlaceIcon className="detail__icon" sx={{ fontSize: 20 }} />
                <div>Cary, NC</div>
            </div>
            <div className="details-list__detail">
                <PhoneIcon className="detail__icon" sx={{ fontSize: 20 }} />
                <a href="tel:304-677-9278">304-677-9278</a>
            </div>
        </div>
    );
}
