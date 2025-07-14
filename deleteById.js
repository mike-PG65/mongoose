require('./mongooseSetup');
const Person = require('./models/person');

const personId = 'PUT_ID_HERE';

Person.findByIdAndRemove(personId, (err, removedPerson) => {
  if (err) return console.error(err);
  console.log('Removed:', removedPerson);
});
