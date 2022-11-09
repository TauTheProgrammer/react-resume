import renderer from 'react-test-renderer';
import React from 'react';
import EmploymentHistory from './EmploymentHistory';

it('Should render', () => {
    const tree = renderer.create(<EmploymentHistory />).toJSON();
    expect(tree).toMatchSnapshot();
});
