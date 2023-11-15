const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    Recipe.create(data).then(recipes => { recipes.forEach(recipe => {console.log('Recipe imported', recipe.title)
    })
    Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, { duration: 100 })
    .then(() => {console.log("Rigatoni alla Genovese is success update")})
    Recipe.deleteOne({title: "Carrot Cake"})
    .then(() => {console.log("Carrot Cake is success delete")})
    .then(() => {console.log("")})
    
    .then(() => {mongoose.connection.close();})
  });
  })
  
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
