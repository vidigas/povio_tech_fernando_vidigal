import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../../ui/components/Form';

const func = () => {};

it('renders correctly', () => {
  const tree = renderer
    .create(<Form 
    					context={'login'}
    					onUserChange={()=> console.log('change')}
    					onPasswordChange={() => console.log('change')}
    					onPrimaryButtonClick={() => console.log('change')}
    					onSecundaryButtonClick={() => console.log('change')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

