import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

//NOTE: mount function to have full dom render
beforeEach(() => {
  wrapped = mount(
    //NOTE: since we use redux connect function on CommentBox component, we need to provide Root which contains redux set up (provider)
    <Root>
      <CommentBox />
    </Root>
  );
});

//NOTE: full dom render may interact with each other which will cause issues, so make sure to unmount after each test
afterEach(() => {
  wrapped.unmount();
});

it('has a text area and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

//NOTE: describe can group certain tests
describe('the text area', () => {
  //NOTE: describe function can have their scoped beforeEach
  beforeEach(() => {
    //NOTE: GOOGLE: change is the real html event, not the react event
    //NOTE: the second argument of simulate is an event object which will be merged into the real event object
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    //NOTE: react set state is async, to ensure we get the new state, we force the rerender
    wrapped.update();
  });

  //NOTE: good practice to check textarea can change before clear the field test function
  it('has a text area that users can type in', () => {
    //NOTE: prop function here can get value from the props of the component
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
