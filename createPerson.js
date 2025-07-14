require('./mongooseSetup');
const Person = require('./models/Person');

async function createPerson() {
  try {
    const newPerson = new Person({
      name: 'Alice',
      age: 25,
      favoriteFoods: ['Pizza', 'Chocolate']
    });

    const savedPerson = await newPerson.save();
    console.log('Saved person:', savedPerson);
  } catch (err) {
    console.error('Error saving person:', err);
  }
}

createPerson();
