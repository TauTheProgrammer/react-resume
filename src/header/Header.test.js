import renderer from 'react-test-renderer';
import Header from './Header';

it('Should render as expected', () => {
    const tree = renderer
        .create(<Header />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});