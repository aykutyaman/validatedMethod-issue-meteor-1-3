if (Meteor.isClient) {
  import {
    foo
  } from './imports/methods.js';

  Template.hello.events({
    'click button'() {
      foo.call({foo: "bar"});
    }
  });
}
