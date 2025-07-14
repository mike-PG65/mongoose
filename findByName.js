require('./mongooseSetup');
const Person = require('./models/person');

Person.find({ name: 'John' }, (err, people) => {
  if (err) return console.error(err);
  console.log('Found people:', people);
});
