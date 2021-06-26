import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  };

  wrapped = mount(
    //NOTE: TEST: GOOGLE: check initialState with combined reducer
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  //NOTE:GOOGLE: check the render method from enzyme library
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
});
