import React from 'react';
import { render, screen, within } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from './Header';

const NO_ENV_SET_JOB_TITLE = 'No Job Title Found';
const WEB_DEVELOPER_JOB_TITLE = 'Web Developer';
const SOFTWARE_ENGINEER_JOB_TITLE = 'Software Engineer';

describe('Header', () => {
    const { env } = process;

    beforeEach(() => {
        jest.resetModules();
        process.env = { ...env };
    });

    afterEach(() => {
        process.env = env;
    });

    describe('Snapshots', () => {
        it(`Should render with {${NO_ENV_SET_JOB_TITLE}} as Job Title when env var not set`, () => {
            const tree = renderer.create(<Header />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it(`Should render with {${WEB_DEVELOPER_JOB_TITLE}} as Job Title when env var set to frontEnd`, () => {
            process.env = { REACT_APP_JOB_TITLE: WEB_DEVELOPER_JOB_TITLE };
            const tree = renderer.create(<Header />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it(`Should render with {${SOFTWARE_ENGINEER_JOB_TITLE}} as Job Title when env var set to fullStack`, () => {
            process.env = { REACT_APP_JOB_TITLE: SOFTWARE_ENGINEER_JOB_TITLE };
            const tree = renderer.create(<Header />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
