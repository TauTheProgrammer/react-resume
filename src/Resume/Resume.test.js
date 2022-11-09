import renderer from 'react-test-renderer';
import Resume from './Resume';

it('Should render as expected', () => {
    const tree = renderer.create(<Resume />).toJSON();
    expect(tree).toMatchSnapshot();
});
