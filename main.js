import {
  foo
} from './imports/methods.js';

if (Meteor.isClient) {

  Template.hello.events({
    'click button'() {
      foo.call({foo: "bar"});
    }
  });
}
