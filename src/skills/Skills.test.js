import renderer from 'react-test-renderer';
import Skills from './Skills';

it('Should render as expected', () => {
    const tree = renderer.create(<Skills />).toJSON();
    expect(tree).toMatchSnapshot();
});
