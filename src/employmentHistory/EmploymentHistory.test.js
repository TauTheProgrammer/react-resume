import renderer from 'react-test-renderer';
import EmploymentHistory from './EmploymentHistory';

it('Should render as expected', () => {
    const tree = renderer
        .create(<EmploymentHistory />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});