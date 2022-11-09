import { render, screen, within } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from './Header';

const NO_ENV_SET_JOB_TITLE = 'No Job Title Found';
const WEB_DEVELOPER_JOB_TITLE = 'Web Developer';
const SOFTWARE_ENGINEER_JOB_TITLE = 'Software Engineer';
const env = process.env;

beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };
});

afterEach(() => {
    process.env = env;
});

it('Should render as expected when no specific env is set', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Should render `Web Developer` as Job Title when corresponding env is set', () => {
    process.env = { REACT_APP_JOB_TITLE: WEB_DEVELOPER_JOB_TITLE };
    const tree = renderer.create(<Header />);
    const treeInstance = tree.root;
    expect(tree.toJSON()).toMatchSnapshot();
    expect(
        treeInstance.findByProps({ className: HEADER_POSITION_CLASSNAME })
            .innerText
    ).toBe(WEB_DEVELOPER_JOB_TITLE);
});

it('Should render `Software Engineer` as Job Title when corresponding env is set', () => {
    process.env = { REACT_APP_JOB_TITLE: SOFTWARE_ENGINEER_JOB_TITLE };
    const tree = renderer.create(<Header />);
    const treeInstance = tree.root;
    expect(tree.toJSON()).toMatchSnapshot();
    expect(
        treeInstance.findByProps({ className: HEADER_POSITION_CLASSNAME })
            .innerText
    ).toBe(SOFTWARE_ENGINEER_JOB_TITLE);
});
