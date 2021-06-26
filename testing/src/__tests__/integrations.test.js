import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  //NOTE: moxios is maintained by axios team
  //NOTE: GOOGLE: since testing env is inside JS Dom not a real browser, so axios request won't work
  //NOTE: so we use moxios to attempt to intercept any request that axios tries to issue
  moxios.install();
  //NOTE: first argu is the url moxios tries to intecept, second argu is the fake response
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  //NOTE: find an element by class name                                                             
  wrapped.find('.fetch-comments').simulate('click');

  //NOTE: instead of using settimeout with some arbitrary waiting time, we can use wait function offered by moxios
  moxios.wait(() => {
    //NOTE: react set state is async, to ensure we get the new state, we force the rerender
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);

    //NOTE: jest run the test function from top to bottom, and try to complete it ASAP, it doesn't handle settimeout very well
    //NOTE: in order to let jest hold on a little bit to wait for the settimeout complete (test inside of it), we should use `done` function offered by jest
    done();
    wrapped.unmount();
  });
});
