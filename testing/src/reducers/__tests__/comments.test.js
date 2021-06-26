import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

//NOTE: testing on reducer is straight forward, we provide the action, and test the returned state
it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
  const newState = commentsReducer([], { type: 'LKAFDSJLKAFD' });

  expect(newState).toEqual([]);
});
