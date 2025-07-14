require('./mongooseSetup');
const Person = require('./models/Person');

const personId = '68752c304832d7e927ccf20d';

async function updateFavoriteFoods() {
  try {
    const person = await Person.findById(personId);
    if (!person) {
      console.log('Person not found');
      return;
    }
    person.favoriteFoods.push('hamburger');
    const updated = await person.save();
    console.log('Updated person:', updated);
  } catch (err) {
    console.error(err);
  }
}

updateFavoriteFoods();
