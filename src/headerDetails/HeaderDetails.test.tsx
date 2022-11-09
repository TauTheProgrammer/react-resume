import renderer from 'react-test-renderer';
import React from 'react';
import HeaderDetails from './HeaderDetails';

it('Should render', () => {
    const tree = renderer.create(<HeaderDetails />).toJSON();
    expect(tree).toMatchSnapshot();
});
