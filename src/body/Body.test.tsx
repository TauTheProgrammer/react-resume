import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import Body from './Body';

const FRONT_END_JOB_TITLE = 'Web Developer';
const FULL_STACK_JOB_TITLE = 'Software Engineer';
const PROFILE_NOT_FOUND_ID = 'ProfileNotFound';
const FRONT_END_PROFILE_ID = 'FrontEndProfile';
const FULL_STACK_PROFILE_ID = 'FullStackProfile';
const MockedProfileNotFound = <div id={PROFILE_NOT_FOUND_ID} />;
const MockedFrontEndProfile = <div id={FRONT_END_PROFILE_ID} />;
const MockedFullStackProfile = <div id={FULL_STACK_PROFILE_ID} />;

// test("renders learn react link", () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
//   });

describe('Body', () => {
    const { env } = process;

    beforeEach(() => {
        jest.resetModules();
        process.env = { ...env };
    });

    afterEach(() => {
        process.env = env;
    });

    describe('Snapshots', () => {
        it('Should render ProfileNotFound when env var is not set', () => {
            const tree = renderer.create(<Body />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('Should render FrontEndProfile when env var is set to frontEnd', () => {
            process.env = { REACT_APP_JOB_TITLE: FRONT_END_JOB_TITLE };
            const tree = renderer.create(<Body />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('Should render FullStackProfile when env var is set to fullStack', () => {
            process.env = { REACT_APP_JOB_TITLE: FULL_STACK_JOB_TITLE };
            const tree = renderer.create(<Body />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
