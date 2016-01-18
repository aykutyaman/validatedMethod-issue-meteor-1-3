import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const foo = new ValidatedMethod({
  name: 'foo',
  validate: new SimpleSchema({
    foo: { type: String }
  }).validator(),
  run() {
    console.log('run');
  }
});
