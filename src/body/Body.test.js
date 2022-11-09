import renderer from 'react-test-renderer';
import Body from './Body';

const PROFILE_NOT_FOUND_ID = "ProfileNotFound";
const FRONT_END_PROFILE_ID = "FrontEndProfile";
const FULL_STACK_PROFILE_ID = "FullStackProfile";

function MockedProfileNotFound() {
    return <div id={PROFILE_NOT_FOUND_ID} />
}

function MockedFrontEndProfile() {
    return <div id={FRONT_END_PROFILE_ID} />
}

function MockedFullStackProfile() {
    return <div id={FULL_STACK_PROFILE_ID} />
}

it('Should render with ProfileNotFound when no specific env is set', () => {
    const tree = renderer.create(<Body />);
    const treeInstance = tree.root;
    expect(tree.toJSON()).toMatchSnapshot();
    expect(treeInstance.findByProps({id: PROFILE_NOT_FOUND_ID})).toBeDefined();
});

it('Should render with FrontEndProfile when corresponding env is set', () => {
    process.env.REACT_APP_JOB_TITLE = "Web Developer";
    const tree = renderer.create(<Body />);
    const treeInstance = tree.root;
    expect(tree.toJSON()).toMatchSnapshot();
    expect(treeInstance.findByProps({id: FRONT_END_PROFILE_ID})).toBeDefined();
});

it('Should render with FullStackProfile when corresponding env is set', () => {
    process.env.REACT_APP_JOB_TITLE = "Software Engineer";
    const tree = renderer.create(<Body />);
    const treeInstance = tree.root;
    expect(tree.toJSON()).toMatchSnapshot();
    expect(treeInstance.findByProps({id: FULL_STACK_PROFILE_ID})).toBeDefined();
});