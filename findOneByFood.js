require('./mongooseSetup');
const Person = require('./models/Person');

const food = 'Burrito';

async function findPersonByFood() {
  try {
    const person = await Person.findOne({ favoriteFoods: food });
    if (!person) {
      console.log(`No person found who likes ${food}`);
      return;
    }
    console.log('Found one:', person);
  } catch (err) {
    console.error(err);
  }
}

findPersonByFood();
