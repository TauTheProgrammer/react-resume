import renderer from 'react-test-renderer';
import React from 'react';
import Skills from './Skills';

it('Should render', () => {
    const tree = renderer.create(<Skills />).toJSON();
    expect(tree).toMatchSnapshot();
});
