import renderer from 'react-test-renderer';
import React from 'react';
import Resume from './Resume';

it('Should render', () => {
    const tree = renderer.create(<Resume />).toJSON();
    expect(tree).toMatchSnapshot();
});
