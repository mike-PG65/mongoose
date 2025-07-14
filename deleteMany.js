require('./mongooseSetup');
const Person = require('./models/person');

Person.remove({ name: 'Mary' }, (err, result) => {
  if (err) return console.error(err);
  console.log('Delete result:', result);
});
