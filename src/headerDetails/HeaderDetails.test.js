import renderer from 'react-test-renderer';
import HeaderDetails from './HeaderDetails';

it('Should render as expected', () => {
    const tree = renderer.create(<HeaderDetails />).toJSON();
    expect(tree).toMatchSnapshot();
});
