require('./mongooseSetup');
const Person = require('./models/Person');

Person.find({ favoriteFoods: 'burrito' })
  .sort({ name: 1 })
  .limit(2)
  .select('-age')
  .exec()
  .then(data => {
    console.log('Chained results:', data);
  })
  .catch(err => {
    console.error(err);
  });
