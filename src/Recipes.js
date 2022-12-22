 const chocolateChipCookies = {
    "id": 1,
    "name": "Chocolate Chip Cookies",
    "image": '/FoodImages/Image4.jpg',
    "description": 'Delicious chocolate chip cookies',
    "ingredients": ['1 cup butter', '1 cup sugar', '1 cup brown sugar', '2 eggs', '1 tsp vanilla', '2 cups flour', '1 tsp baking soda', '1 tsp salt', '1 cup chocolate chips'],
    "instructions": [
        'Preheat the oven to 350°F.',
        'Cream together the butter, sugar, and brown sugar until smooth.',
        'Beat in the eggs, one at a time, then stir in the vanilla.',
        'Combine the flour, baking soda, and salt; gradually add to the creamed mixture and mix well.',
        'Stir in the chocolate chips.',
        'Drop by rounded tablespoon onto ungreased baking sheets.',
        'Bake for 8-10 minutes, or until lightly golden.'
    ],
    "servingSize": "24 cookies",
    "prepTime": "10 minutes",
    "cookTime": "10 minutes",
    "tags": ["dessert", "snack", "chocolate"]
  };
  
  const roastedVegetableQuinoaSalad = {
    "id": 2,
    "name": "Roasted Vegetable Quinoa Salad",
    "image": '/FoodImages/Image5.jpg',
    "description": "This healthy and flavorful quinoa salad is packed with roasted vegetables and topped with a tangy vinaigrette. Perfect for a light lunch or dinner!",
    "ingredients": [    
    "1 cup quinoa",
    "2 cups water",
    "1 tbsp olive oil",
    "1 red bell pepper, cut into 1-inch pieces",
    "1 yellow bell pepper, cut into 1-inch pieces",
    "1 zucchini, cut into 1-inch pieces",
    "1 red onion, cut into 1-inch pieces",
    "1 tsp salt",
    "1/2 tsp black pepper",
    "1/4 cup red wine vinegar",
    "1/4 cup olive oil",
    "2 tbsp dijon mustard",
    "2 cloves garlic, minced",
    "1 tsp honey"],
    "instructions": [
        "Preheat the oven to 400°F. Line a baking sheet with parchment paper.",
"Rinse the quinoa in a fine mesh sieve and add it to a saucepan with the water. Bring to a boil, reduce the heat to low, and simmer, covered, for 15 minutes. Remove from the heat and let sit, covered, for 5 minutes. Fluff the quinoa with a fork and set aside.",
"While the quinoa is cooking, prepare the vegetables. In a large mixing bowl, toss the bell peppers, zucchini, and onion with the olive oil, salt, and black pepper. Arrange the vegetables in a single layer on the prepared baking sheet and roast for 20-25 minutes, or until tender and lightly browned.",
"In a small mixing bowl, whisk together the red wine vinegar, olive oil, dijon mustard, garlic, and honey to make the vinaigrette. Set aside.",
"In a large serving bowl, combine the quinoa and roasted vegetables. Pour the vinaigrette over the top and toss to coat. Serve immediately, or refrigerate until ready to serve."
    ],
    "servingSize": "4 servings",
    "prepTime": "20 minutes",
    "cookTime": "25 minutes",
    "tags": ["vegetarian", "gluten-free", "lunch", "dinner"]
  };
  
  const spaghettiCarbonara = {
    "id": 3,
    "name": "Spaghetti Carbonara",
    "image": '/FoodImages/Image6.jpg',
    "description": "This creamy spaghetti carbonara is a classic Italian dish made with spaghetti, bacon, eggs, and Parmesan cheese. It's quick and easy to make, and perfect for a weeknight dinner!",
    "ingredients": [
    "8 oz spaghetti",
    "4 slices bacon, chopped",
    "2 eggs",
    "1/2 cup grated Parmesan cheese",
    "1/4 tsp black pepper",
    "1/4 tsp salt",
    "2 tbsp parsley, chopped (optional)"],
    "instructions": [
        "Bring a large pot of salted water to a boil. Add the spaghetti and cook according to package instructions until al dente. Drain the spaghetti and set aside.",
        "In a large skillet, cook the bacon over medium heat until crispy. Remove the bacon from the skillet and set aside. Leave the bacon grease in the skillet.",
        "In a small mixing bowl, whisk together the eggs, Parmesan cheese, black pepper, and salt. Set aside.",
        "Add the spaghetti to the skillet with the bacon grease and toss to coat. Pour the egg mixture over the top of the spaghetti and stir quickly to combine. The heat of the spaghetti will cook the eggs and create a creamy sauce. If the sauce seems too thick, you can add a splash of the pasta cooking water to thin it out.",
        "Serve the spaghetti carbonara topped with the crispy bacon and a sprinkle of parsley, if desired."
    ],
    "servingSize": "4 servings",
    "prepTime": "10 minutes",
    "cookTime": "15 minutes",
    "tags": ["pasta", "dinner", "Italian"]
  };
  const Recipes = [
    chocolateChipCookies,
    roastedVegetableQuinoaSalad,
    spaghettiCarbonara
  ];
  
  export default Recipes;
  
  