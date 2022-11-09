import renderer from 'react-test-renderer';
import ProfileNotFound from './ProfileNotFound';
import FrontEndProfile from './FrontEndProfile';
import FullStackProfile from './FullStackProfile';

it('ProfileNotFound should render as expected', () => {
    const tree = renderer
        .create(<ProfileNotFound />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('FrontEndProfile should render as expected', () => {
    const tree = renderer
        .create(<FrontEndProfile />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('FullStackProfile should render as expected', () => {
    const tree = renderer
        .create(<FullStackProfile />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});