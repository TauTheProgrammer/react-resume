import renderer from 'react-test-renderer';
import Profile from './Profile';

it('Should render as expected', () => {
    const tree = renderer
        .create(<Profile />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});