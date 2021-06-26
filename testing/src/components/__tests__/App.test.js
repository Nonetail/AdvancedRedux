import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

//NOTE: beforeEach will run before every single `it` test function
beforeEach(() => {
  //NOTE: shallow only renders one single component (or vanilla html inside of it), but none of its children
  wrapped = shallow(<App />);
});

//NOTE: `it` is a global function
//NOTE: description `shows a comment box` here should not include `it`
it('shows a comment box', () => {
  //NOTE: in general, we should see 1 or 2 expect statement in one `it` block
  //NOTE: find method can find all the copies of the component we passed in, and returns an array
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
