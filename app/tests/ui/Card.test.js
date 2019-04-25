import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../../ui/components/Card';

const func = () => {};

it('renders correctly', () => {
  const tree = renderer
    .create(<Card username="username" likes={4} id={'abcd12343'} clickAction={()=> console.log('click')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

