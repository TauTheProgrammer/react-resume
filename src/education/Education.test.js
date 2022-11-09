import renderer from 'react-test-renderer';
import Education from './Education';

it('Should render as expected', () => {
    const tree = renderer.create(<Education />).toJSON();
    expect(tree).toMatchSnapshot();
});
