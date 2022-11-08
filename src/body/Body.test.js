import renderer from 'react-test-renderer';
import Body from './Body';

it('Should render as expected', () => {
    const tree = renderer
        .create(<Body />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});