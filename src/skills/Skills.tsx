import './Skills.css';
import React, { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Rating } from '@mui/material';
import { SKILLS } from '../constants';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: 'var(--background-primary)',
    },
});

export default function Skills() {
    return (
        <>
            <h1>Experience</h1>
            {SKILLS.skillSet.map((skillSet) => (
                <div className="skill-set" key={skillSet.header}>
                    <div className="skill-set__header">{skillSet.header}</div>
                    {skillSet.skills.map((skill) => (
                        <div className="skill-set__skill" key={skill.name}>
                            <label
                                htmlFor={skill.name}
                                className="skill__skill-name"
                            >
                                {skill.name}
                            </label>
                            <StyledRating
                                id={skill.name}
                                name={skill.name}
                                className="skill__skill-rating"
                                readOnly
                                defaultValue={skill.rating}
                                icon={
                                    <CircleIcon
                                        sx={{
                                            fontSize: SKILLS.skillIconSize,
                                        }}
                                    />
                                }
                                emptyIcon={
                                    <CircleOutlinedIcon
                                        sx={{
                                            fontSize: SKILLS.skillIconSize,
                                        }}
                                    />
                                }
                            />
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}
