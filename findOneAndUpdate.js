require('./mongooseSetup');
const Person = require('./models/Person');

const personName = 'John';

async function updatePerson() {
  try {
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true }
    );
    console.log('Updated:', updatedPerson);
  } catch (err) {
    console.error(err);
  }
}

updatePerson();
