import './Skills.css';
import { SKILLS } from '../../../constants';
import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Rating } from '@mui/material';
import { Fragment } from 'react';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: 'var(--background-primary)',
    }
  });

export default function Skills() {
    return (
        <Fragment>
            <h1>Experience</h1>
            {SKILLS.skillSet.map((skillSet, index) => {
                return (
                    <div className="skill-set" key={index}>
                        <div className="skill-set__header">{skillSet.header}</div>
                        {skillSet.skills.map((skill, index) => {
                            return (
                                <div className="skill-set__skill" key={`skill ${index}`}>
                                    <label htmlFor={skill.name} className="skill__skill-name">{skill.name}</label>
                                    <StyledRating
                                        id={skill.name}
                                        name={skill.name}
                                        className="skill__skill-rating"
                                        readOnly
                                        defaultValue={skill.rating}
                                        icon={<CircleIcon sx={{ fontSize: SKILLS.skillIconSize }} />}
                                        emptyIcon={<CircleOutlinedIcon sx={{ fontSize: SKILLS.skillIconSize }} />}
                                    />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </Fragment>
    );
}