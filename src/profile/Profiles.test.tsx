import renderer from 'react-test-renderer';
import React from 'react';
import ProfileNotFound from './ProfileNotFound';
import FrontEndProfile from './FrontEndProfile';
import FullStackProfile from './FullStackProfile';

it('ProfileNotFound should render', () => {
    const tree = renderer.create(<ProfileNotFound />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('FrontEndProfile should render', () => {
    const tree = renderer.create(<FrontEndProfile />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('FullStackProfile should render', () => {
    const tree = renderer.create(<FullStackProfile />).toJSON();
    expect(tree).toMatchSnapshot();
});
