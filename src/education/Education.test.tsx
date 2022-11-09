import renderer from 'react-test-renderer';
import React from 'react';
import Education from './Education';

it('Should render', () => {
    const tree = renderer.create(<Education />).toJSON();
    expect(tree).toMatchSnapshot();
});
