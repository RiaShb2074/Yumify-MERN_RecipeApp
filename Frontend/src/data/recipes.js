const recipes = [
  {
    id: 1,
    title: "Aloo Gobi",
    imgurl: "https://www.allrecipes.com/thmb/f595a34BUCGETZjJYiMsRLzZRnA=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/JF_83097-Authentic-German-Potato-Salad-4x3_0564-d3a46edfe7784159aea8ba2a3b81bb58.jpg",
    cuisine: "Indian",
    ingredients: [
      { name: "Potato", quantity: "2" },
      { name: "Cauliflower", quantity: "1 head" },
      { name: "Turmeric", quantity: "1 tsp" },
      { name: "Cumin", quantity: "1 tsp" },
    ],
    instruction: "Cook potatoes and cauliflower with spices.",
  },
  {
    id: 2,
    title: "Chow Mein",
    imgurl: "https://www.simplyrecipes.com/thmb/T2k2mZAgmvkUIer0WNMJOdEbbQI=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2014__05__asian-noodle-salad-horiz-2-909d6777c8864c5e900e98136393b484.jpg",
    cuisine: "Chinese",
    ingredients: [
      { name: "Noodles", quantity: "200g" },
      { name: "Cabbage", quantity: "1 cup" },
      { name: "Soy Sauce", quantity: "2 tbsp" },
      { name: "Carrot", quantity: "1/2 cup" },
    ],
    instruction: "Stir-fry noodles with vegetables and sauce.",
  },
  {
    id: 3,
    title: "Sushi Roll",
    imgurl: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VzaGl8ZW58MHx8MHx8fDA%3D",
    cuisine: "Japanese",
    ingredients: [
      { name: "Sushi Rice", quantity: "1 cup" },
      { name: "Nori", quantity: "2 sheets" },
      { name: "Cucumber", quantity: "1/2" },
      { name: "Fish", quantity: "100g" },
    ],
    instruction: "Roll rice and fillings in seaweed, slice and serve.",
  },
  {
    id: 4,
    title: "Pad Thai",
    imgurl: "https://www.simplyrecipes.com/thmb/MDoAMAmlc131cqVmvUUy3vmFitg=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Thai-Fried-Rice-LEAD-2-fefab2c8c44d4b0895ab3cdc225da554.jpg",
    cuisine: "Thai",
    ingredients: [
      { name: "Rice noodles", quantity: "200g" },
      { name: "Tofu", quantity: "100g" },
      { name: "Bean sprouts", quantity: "1 cup" },
      { name: "Peanuts", quantity: "2 tbsp" },
    ],
    instruction: "Fry noodles with sauce, tofu, veggies, and peanuts.",
  },
  {
    id: 5,
    title: "Pasta Alfredo",
    imgurl: "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,w_232,h_180/v1/img/recipes/43/02/3/Z9lYSjJT86fzUAlIWJdH_0S9A6422.jpg",
    cuisine: "Italian",
    ingredients: [
      { name: "Pasta", quantity: "200g" },
      { name: "Cream", quantity: "1 cup" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Parmesan", quantity: "1/4 cup" },
    ],
    instruction: "Cook pasta and mix with cream and cheese.",
  },
   {
    id: 6,
    title: "Tacos al Pastor",
    imgurl: "https://www.simplyrecipes.com/thmb/I-MrirLIsVVXpVoDWsFMxs5AY6o=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Tacos-Al-Pastor-Lead-04-429571d03db94ed1a8a24f8c2d351cec.jpg",
    cuisine: "Mexican",
    ingredients: [
      { name: "Pork", quantity: "200g" },
      { name: "Pineapple", quantity: "1/2 cup" },
      { name: "Tortilla", quantity: "2" },
      { name: "Onion", quantity: "1/4 cup" },
    ],
    instruction: "Grill pork with pineapple, serve in tortilla with onions.",
  },
  {
    id: 7,
    title: "Guacamole",
    imgurl: "https://www.simplyrecipes.com/thmb/OBWuGYzkP7f5FmztKluir4txBlE=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Guacamole-LEAD-6-2-64cfcca253c8421dad4e3fad830219f6.jpg",
    cuisine: "Mexican",
    ingredients: [
      { name: "Avocado", quantity: "2" },
      { name: "Lime", quantity: "1" },
      { name: "Tomato", quantity: "1/2 cup" },
      { name: "Onion", quantity: "1/4 cup" },
    ],
    instruction: "Mash avocado and mix with chopped vegetables and lime juice.",
  },
  {
    id: 8,
    title: "Butter Chicken",
    imgurl: "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,w_232,h_180/v1/img/recipes/97/57/3/MZb2fAjRkqUCOXvWpyPm_0S9A4024.jpg",
    cuisine: "Indian",
    ingredients: [
      { name: "Chicken", quantity: "300g" },
      { name: "Butter", quantity: "3 tbsp" },
      { name: "Tomato Puree", quantity: "1 cup" },
      { name: "Cream", quantity: "1/2 cup" },
    ],
    instruction: "Cook chicken in butter and tomato gravy with cream.",
  },
  {
    id: 9,
    title: "Ramen",
    imgurl: "https://www.simplyrecipes.com/thmb/tmZgUQGHPRCXQT1Z8AQLKWhINUo=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-One-Ingredient-Ramen-LEAD-02-2e72c8b3ecf24e4cb939266bb0218fd6.jpg",
    cuisine: "Japanese",
    ingredients: [
      { name: "Ramen noodles", quantity: "1 pack" },
      { name: "Soy Sauce", quantity: "2 tbsp" },
      { name: "Egg", quantity: "1" },
      { name: "Spring Onion", quantity: "2 tbsp" },
    ],
    instruction: "Boil noodles and serve with broth, egg, and toppings.",
  },
  {
    id: 10,
    title: "Matar Paneer",
    imgurl: "https://www.simplyrecipes.com/thmb/3PWQfFE3iMEyfPt1li7BX0q7giU=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Matar-Paneer-LEAD-04-54973561cdb944f587165ecf161acc83.jpg",
    cuisine: "Indian",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Spices", quantity: "3 tbsp" },
      { name: "Capsicum", quantity: "1/2 cup" },
    ],
    instruction: "Marinate paneer and grill with veggies.",
  },
  {
    id: 11,
    title: "Kung Pao Chicken",
    imgurl: "https://www.simplyrecipes.com/thmb/ya_ASi_7BVK-TeVmBvPln0XGDm0=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__03__Firecracker-Chicken-LEAD-HORIZONTAL-81b033c1f3ec4f3cb7aa0643f1d21981.jpg",
    cuisine: "Chinese",
    ingredients: [
      { name: "Chicken", quantity: "300g" },
      { name: "Peanuts", quantity: "1/4 cup" },
      { name: "Chilies", quantity: "5" },
      { name: "Soy Sauce", quantity: "2 tbsp" },
    ],
    instruction: "Stir-fry chicken with chilies and peanuts.",
  },
  {
    id: 12,
    title: "Lasagna",
    imgurl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/0/LR0710_lasagna_s4x3.jpg.rend.hgtvcom.476.357.suffix/1382539976459.jpeg",
    cuisine: "Italian",
    ingredients: [
      { name: "Lasagna Sheets", quantity: "6" },
      { name: "Ricotta", quantity: "1 cup" },
      { name: "Tomato Sauce", quantity: "1.5 cups" },
      { name: "Mozzarella", quantity: "1 cup" },
    ],
    instruction: "Layer ingredients and bake until golden.",
  },
  {
    id: 13,
    title: "Tempura",
    imgurl: "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,w_232,h_180/v1/img/recipes/16/94/44/picrX1miH.jpg",
    cuisine: "Japanese",
    ingredients: [
      { name: "Shrimp", quantity: "8 pcs" },
      { name: "Tempura batter", quantity: "1 cup" },
      { name: "Oil", quantity: "500ml" },
    ],
    instruction: "Dip shrimp in batter and deep fry.",
  },
  {
    id: 14,
    title: "Green Curry",
    imgurl: "https://www.simplyrecipes.com/thmb/XZHsPPTI9naszgAxI4JcMPbo6XU=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2016__08__2016-09-05-Green-Curry-8-0ae982ea53514675b3dc552ed130e62f.jpg",
    cuisine: "Thai",
    ingredients: [
      { name: "Green curry paste", quantity: "3 tbsp" },
      { name: "Coconut milk", quantity: "1 cup" },
      { name: "Chicken", quantity: "200g" },
      { name: "Thai basil", quantity: "10 leaves" },
    ],
    instruction: "Simmer curry paste with coconut milk and chicken.",
  },
  {
    id: 15,
    title: "Enchiladas",
    imgurl: "https://www.simplyrecipes.com/thmb/ET4WsxBHrqBY1dXLNqFw5CgPE3I=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__05__Skillet-Chicken-Enchiladas-LEAD-3-7485c9c9621c48aaa6f4bf485d453e07.jpg",
    cuisine: "Mexican",
    ingredients: [
      { name: "Tortillas", quantity: "4" },
      { name: "Chicken", quantity: "200g" },
      { name: "Enchilada Sauce", quantity: "1 cup" },
      { name: "Cheese", quantity: "1 cup" },
    ],
    instruction: "Roll filling in tortillas, top with sauce and bake.",
  },
  {
    id: 16,
    title: "Burrito Bowl",
    imgurl: "https://www.simplyrecipes.com/thmb/uSxyP3wdrHCD3573Jk99sEE-uRA=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2016__07__2016-08-03-BBQ-Chicken-Bowls-12-0585976085e246f3aaf1df864d090395.jpg",
    cuisine: "Mexican",
    ingredients: [
      { name: "Rice", quantity: "1 cup" },
      { name: "Beans", quantity: "1/2 cup" },
      { name: "Chicken", quantity: "150g" },
      { name: "Salsa", quantity: "1/4 cup" },
    ],
    instruction: "Assemble all ingredients in a bowl.",
  },
  {
    id: 17,
    title: "Cheeseburger",
    imgurl: "https://www.simplyrecipes.com/thmb/Qjp0LzchT2pGH4zehI9KB6uc-yE=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__06__HT-Grill-Burger-LEAD-HORIZONTAL-4d92f9ebd3c742a5b84c1254e2770eab.jpg",
    cuisine: "American",
    ingredients: [
      { name: "Beef patty", quantity: "1" },
      { name: "Bun", quantity: "1" },
      { name: "Cheese", quantity: "1 slice" },
      { name: "Lettuce", quantity: "2 leaves" },
    ],
    instruction: "Grill patty and assemble in bun with toppings.",
  },
  {
    id: 18,
    title: "Mac and Cheese",
    imgurl: "https://www.simplyrecipes.com/thmb/ZBO-PPlFXCcb9cWXpX-Jm18wcV8=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-One-Pot-Mac-Cheese-LEAD-3-2b046424f60b4cab935bf53fb05e7ee0.jpg",
    cuisine: "American",
    ingredients: [
      { name: "Macaroni", quantity: "1 cup" },
      { name: "Cheddar", quantity: "1 cup" },
      { name: "Milk", quantity: "1 cup" },
      { name: "Butter", quantity: "2 tbsp" },
    ],
    instruction: "Cook pasta and mix with cheese sauce.",
  },
  {
    id: 19,
    title: "Miso Soup",
    imgurl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/1/29/0/FNK_Miso-Soup_s4x3.jpg.rend.hgtvcom.476.357.suffix/1485713419772.jpeg",
    cuisine: "Japanese",
    ingredients: [
      { name: "Miso paste", quantity: "2 tbsp" },
      { name: "Dashi", quantity: "2 cups" },
      { name: "Tofu", quantity: "100g" },
      { name: "Seaweed", quantity: "1 tbsp" },
    ],
    instruction: "Heat dashi and add miso paste and ingredients.",
  },
  {
    id: 20,
    title: "Thai Mango Sticky Rice",
    imgurl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/03/03/0/KC2711_Sticky-Rice-with-Mango_s4x3.jpg.rend.hgtvcom.476.357.suffix/1614793984479.jpeg",
    cuisine: "Thai",
    ingredients: [
      { name: "Sticky rice", quantity: "1 cup" },
      { name: "Coconut milk", quantity: "1 cup" },
      { name: "Sugar", quantity: "1/4 cup" },
      { name: "Mango", quantity: "1 sliced" },
    ],
    instruction: "Steam rice, mix with sweet coconut milk, serve with mango.",
  },
   {
    id: 21,
    title: "Chana Masala",
    imgurl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/25/0/FNK_Shortcut-Chana-Masala_H2_s4x3.jpg.rend.hgtvcom.476.357.suffix/1614271995237.jpeg",
    cuisine: "Indian",
    ingredients: [
      { name: "Chickpeas", quantity: "1 cup" },
      { name: "Tomato", quantity: "1 cup" },
      { name: "Onion", quantity: "1/2 cup" },
      { name: "Spices", quantity: "2 tbsp" },
    ],
    instruction: "Cook chickpeas with spiced tomato onion gravy.",
  },
  {
    id: 22,
    title: "Gobi Manchurian",
    imgurl: "https://www.allrecipes.com/thmb/ZTIpBYmSpY_aL8rJf7xiFDqLL6E=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6487224-b9d4287fa4c945f1a9a7d0402c7061fe.jpg",
    cuisine: "Indian",
    ingredients: [
      { name: "Cauliflower", quantity: "1 head" },
      { name: "Soy Sauce", quantity: "2 tbsp" },
      { name: "Garlic", quantity: "1 tbsp" },
      { name: "Cornflour", quantity: "3 tbsp" },
    ],
    instruction: "Fry cauliflower and coat with spicy Indo-Chinese sauce.",
  },
  {
    id: 23,
    title: "Omurice",
    imgurl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/2/24/NEW_FNK_Omurice_s4x3.jpg.rend.hgtvcom.476.357.suffix/1677518012527.jpeg",
    cuisine: "Chinese",
    ingredients: [
      { name: "Cooked rice", quantity: "2 cups" },
      { name: "Egg", quantity: "2" },
      { name: "Soy Sauce", quantity: "1 tbsp" },
      { name: "Peas", quantity: "1/2 cup" },
    ],
    instruction: "Scramble eggs, add rice and fry with sauce.",
  },
  {
    id: 24,
    title: "Mapo Tofu",
    imgurl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/7/10/MW1305-molly-yeh-mapo-tofu-with-pork_s4x3.jpg.rend.hgtvcom.476.357.suffix/1689024275985.jpeg",
    cuisine: "Chinese",
    ingredients: [
      { name: "Tofu", quantity: "200g" },
      { name: "Ground pork", quantity: "100g" },
      { name: "Chili bean paste", quantity: "2 tbsp" },
      { name: "Garlic", quantity: "1 tbsp" },
    ],
    instruction: "Stir-fry pork with tofu in spicy bean sauce.",
  },
  {
    id: 25,
    title: "Teriyaki Chicken",
    imgurl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/19/0/TU0712H_Grilled_Honey-Teriyaki-Chicken_s4x3.jpg.rend.hgtvcom.476.357.suffix/1371595429815.jpeg",
    cuisine: "Japanese",
    ingredients: [
      { name: "Chicken thigh", quantity: "300g" },
      { name: "Soy Sauce", quantity: "3 tbsp" },
      { name: "Mirin", quantity: "2 tbsp" },
      { name: "Sugar", quantity: "1 tbsp" },
    ],
    instruction: "Pan-fry chicken and glaze with teriyaki sauce.",
  },
  {
    id: 26,
    title: "Onigiri",
    imgurl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/1/29/0/FN_Onigiri-Rice-Balls_s4x3.jpg.rend.hgtvcom.476.357.suffix/1485713435783.jpeg",
    cuisine: "Japanese",
    ingredients: [
      { name: "Rice", quantity: "1 cup" },
      { name: "Nori", quantity: "2 sheets" },
      { name: "Tuna", quantity: "1/4 cup" },
      { name: "Mayonnaise", quantity: "1 tbsp" },
    ],
    instruction: "Form rice balls with filling, wrap in seaweed.",
  },
  {
    id: 27,
    title: "Tom Yum Soup",
    imgurl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/11/1/0/DV2708H_Tom-Yum-Seafood-Soup_s4x3.jpg.rend.hgtvcom.476.357.suffix/1509553472260.jpeg",
    cuisine: "Thai",
    ingredients: [
      { name: "Shrimp", quantity: "200g" },
      { name: "Lemongrass", quantity: "1 stalk" },
      { name: "Galangal", quantity: "4 slices" },
      { name: "Lime juice", quantity: "2 tbsp" },
    ],
    instruction: "Boil broth with herbs, add shrimp and serve.",
  },
  {
    id: 28,
    title: "Thai Basil Chicken",
    imgurl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/03/10/0/FNK_BEST-CHICKEN-AND-RICE-H_s4x3.jpg.rend.hgtvcom.476.357.suffix/1583851621211.jpeg",
    cuisine: "Thai",
    ingredients: [
      { name: "Chicken", quantity: "200g" },
      { name: "Thai basil", quantity: "1 cup" },
      { name: "Soy Sauce", quantity: "1 tbsp" },
      { name: "Garlic", quantity: "1 tbsp" },
    ],
    instruction: "Stir-fry chicken with garlic and basil.",
  },
  {
    id: 29,
    title: "Bruschetta",
    imgurl: "https://www.simplyrecipes.com/thmb/G7CNi1w3mSQylrQU01Qg5uJKp_U=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__03__2017-04-22-BruschettaChicken-14-06fd6610d5d54588ad5a5cc5466cd0b2.jpg",
    cuisine: "Italian",
    ingredients: [
      { name: "Baguette", quantity: "6 slices" },
      { name: "Tomato", quantity: "1 cup" },
      { name: "Basil", quantity: "1/4 cup" },
      { name: "Olive oil", quantity: "2 tbsp" },
    ],
    instruction: "Top toasted bread with tomato-basil mix.",
  },
  {
    id: 30,
    title: "Risotto",
    imgurl: "https://www.simplyrecipes.com/thmb/FV3yKpz6QFaqeBV6utLZv0Ig2d0=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SimplyRecipes_ShrimpRisotto_SEO-0d50f8c14eac4131aa9fe1046a61695a.jpg",
    cuisine: "Italian",
    ingredients: [
      { name: "Arborio rice", quantity: "1 cup" },
      { name: "Mushrooms", quantity: "1 cup" },
      { name: "Parmesan", quantity: "1/4 cup" },
      { name: "Stock", quantity: "3 cups" },
    ],
    instruction: "Slowly cook rice in broth, stir in mushrooms and cheese.",
  },
  {
    id: 31,
    title: "Chiles Rellenos",
    imgurl: "https://www.simplyrecipes.com/thmb/UJ5nCm7I3-aG1EzGzAX7VEZ-njk=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Chile-Relleno-Casserole-Lead-2-0ba57750aca74fcbb9f922e391b6c0a9.jpg",
    cuisine: "Mexican",
    ingredients: [
      { name: "Poblano peppers", quantity: "2" },
      { name: "Cheese", quantity: "1/2 cup" },
      { name: "Egg", quantity: "1" },
      { name: "Flour", quantity: "1/4 cup" },
    ],
    instruction: "Stuff peppers, batter and fry until golden.",
  },
  {
    id: 32,
    title: "Tamales",
    imgurl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/7/23/0/EA1303_Hot-Tamales_s4x3.jpg.rend.hgtvcom.476.357.suffix/1406145422579.jpeg",
    cuisine: "Mexican",
    ingredients: [
      { name: "Masa", quantity: "2 cups" },
      { name: "Pork", quantity: "1 cup" },
      { name: "Corn husks", quantity: "10" },
      { name: "Chili sauce", quantity: "1/2 cup" },
    ],
    instruction: "Wrap filling in masa and steam in husks.",
  },
  {
    id: 33,
    title: "Sloppy Joe",
    imgurl: "https://www.simplyrecipes.com/thmb/_mNkS-ti1is-hO-frJIZBNAGjKI=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Chorizo-Sloppy-Joes-LEAD-3-fe79e45ebc314072aadfc7be8ef2eff2.jpg",
    cuisine: "American",
    ingredients: [
      { name: "Ground beef", quantity: "200g" },
      { name: "Tomato sauce", quantity: "1/2 cup" },
      { name: "Bun", quantity: "1" },
      { name: "Onion", quantity: "1/4 cup" },
    ],
    instruction: "Cook beef in sauce and serve in bun.",
  },
  {
    id: 34,
    title: "Clam Chowder",
    imgurl: "https://www.simplyrecipes.com/thmb/SBPZMKto8m4UVWn40_31B-1jzP0=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__11__Clam-Chowder-LEAD-01-f33df0b8b6d34c82916980ee0948fec5.jpg",
    cuisine: "American",
    ingredients: [
      { name: "Clams", quantity: "1 cup" },
      { name: "Potato", quantity: "1" },
      { name: "Cream", quantity: "1 cup" },
      { name: "Celery", quantity: "1/4 cup" },
    ],
    instruction: "Simmer ingredients into a creamy soup.",
  },
  {
    id: 35,
    title: "Rava Upma",
    imgurl: "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,w_232,h_180/v1/img/recipes/16/47/99/picPH7Z2A.jpg",
    cuisine: "Indian",
    ingredients: [
      { name: "Semolina", quantity: "1 cup" },
      { name: "Mustard Seeds", quantity: "1 tsp" },
      { name: "Green Chili", quantity: "1" },
      { name: "Curry Leaves", quantity: "5" },
    ],
    instruction: "Roast semolina and cook with tempered spices.",
  },
  {
    id: 36,
    title: "Beef and Broccoli",
    imgurl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/9/9/0/KC1411H_Asian-Beef-with-Broccoli_s4x3.jpg.rend.hgtvcom.476.357.suffix/1654622810381.jpeg",
    cuisine: "Chinese",
    ingredients: [
      { name: "Beef", quantity: "200g" },
      { name: "Broccoli", quantity: "1 cup" },
      { name: "Oyster Sauce", quantity: "2 tbsp" },
      { name: "Ginger", quantity: "1 tsp" },
    ],
    instruction: "Stir-fry beef and broccoli in sauce.",
  },
  {
    id: 37,
    title: "Japanese Curry",
    imgurl: "https://food.cld.sndimg.com/image/upload/c_fill,h_192,w_259/v1/fn_core_images/food/plus/fullset/2021/07/07/1/FNP_Sakai_Japanese-Curry-with-Shrimp_4x3.jpg",
    cuisine: "Japanese",
    ingredients: [
      { name: "Curry roux", quantity: "1 block" },
      { name: "Potato", quantity: "1" },
      { name: "Carrot", quantity: "1" },
      { name: "Chicken", quantity: "200g" },
    ],
    instruction: "Cook vegetables and meat with curry roux.",
  },
  {
    id: 38,
    title: "Thai Red Curry",
    imgurl: "https://www.allrecipes.com/thmb/zc52RV8rnGsQYLDP2HTU2CguM2s=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/269189-c874e01acbed49b2bea6339a71c85151.jpg",
    cuisine: "Thai",
    ingredients: [
      { name: "Red curry paste", quantity: "2 tbsp" },
      { name: "Coconut milk", quantity: "1 cup" },
      { name: "Bamboo shoots", quantity: "1/2 cup" },
      { name: "Chicken", quantity: "200g" },
    ],
    instruction: "Simmer ingredients in curry coconut broth.",
  },
  {
    id: 39,
    title: "Caprese Salad",
    imgurl: "https://www.allrecipes.com/thmb/knrz94hz3kacjTPveyvpqUxKq8w=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-228126-caprese-salad-with-balsamic-reduction-ddmfs-2644-4x3-f32ac2b2fb9d4234884a752490fb015b.jpg",
    cuisine: "Italian",
    ingredients: [
      { name: "Tomato", quantity: "1" },
      { name: "Mozzarella", quantity: "100g" },
      { name: "Basil", quantity: "10 leaves" },
      { name: "Olive oil", quantity: "1 tbsp" },
    ],
    instruction: "Layer tomatoes and cheese, drizzle oil and garnish.",
  },
  {
    id: 40,
    title: "Quesadilla",
    imgurl: "https://www.allrecipes.com/thmb/5F7c7ltEY4sP9SKpyeVDlzCgni4=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/190839-mashed-potato-quesadilla-Melissa-Goff-4x3-1-773b1b28ffdc419eabe917e924db195b.jpg",
    cuisine: "Mexican",
    ingredients: [
      { name: "Tortilla", quantity: "2" },
      { name: "Cheese", quantity: "1 cup" },
      { name: "Jalapeno", quantity: "1 tbsp" },
      { name: "Butter", quantity: "1 tbsp" },
    ],
    instruction: "Fill tortilla with cheese, toast until melted.",
  },
  {
    id: 41,
    title: "Buffalo Wings",
    imgurl: "https://www.allrecipes.com/thmb/HZwYY0tAzuuaO179AhvKLx_JQFI=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/166638-baked-buffalo-wings-ddmfs-beauty-3x4-90787930d20b402e9dde79c22fced332.jpg",
    cuisine: "American",
    ingredients: [
      { name: "Chicken wings", quantity: "10" },
      { name: "Hot sauce", quantity: "1/4 cup" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Garlic powder", quantity: "1 tsp" },
    ],
    instruction: "Fry wings and coat in spicy butter sauce.",
  },
   {
    id: 42,
    title: "Chole Puri",
    imgurl: "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,w_232,h_180/v1/img/recipes/48/42/69/picayi6QW.jpg",
    cuisine: "Indian",
    ingredients: [
      { name: "Chickpeas", quantity: "1 cup" },
      { name: "Tomatoes", quantity: "2" },
      { name: "Onions", quantity: "1" },
      { name: "Bhature", quantity: "2" }
    ],
    instruction: "Cook spiced chickpeas and serve with deep-fried bread."
  },
  {
    id: 43,
    title: "Masala Dosa",
    imgurl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_240,h_240/FOOD_CATALOG/IMAGES/CMS/2025/2/11/097a9514-4c01-4d48-a0cc-dde8cb71f8da_ddd632b2-0645-4adc-a589-1af4bdbefb82.jpg",
    cuisine: "Indian",
    ingredients: [
      { name: "Dosa batter", quantity: "2 cups" },
      { name: "Potato filling", quantity: "1 cup" },
      { name: "Mustard seeds", quantity: "1 tsp" },
      { name: "Curry leaves", quantity: "5" }
    ],
    instruction: "Make dosa and fill with spiced mashed potato."
  },
  {
    id: 44,
    title: "Biryani",
    imgurl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani.jpg",
    cuisine: "Indian",
    ingredients: [
      { name: "Rice", quantity: "1.5 cups" },
      { name: "Chicken", quantity: "300g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Spices", quantity: "2 tbsp" }
    ],
    instruction: "Layer rice and marinated chicken, cook together."
  },
  {
    id: 45,
    title: "Rajma",
    imgurl: "https://www.allrecipes.com/thmb/-KFt3vMAepjfIxdmvvkvbFN98RY=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6277719-2000-239fdf89e0d147f9bd01c6392dd4178c.jpg",
    cuisine: "Indian",
    ingredients: [
      { name: "Kidney beans", quantity: "1 cup" },
      { name: "Tomatoes", quantity: "2" },
      { name: "Ginger garlic paste", quantity: "1 tbsp" },
      { name: "Spices", quantity: "2 tsp" }
    ],
    instruction: "Cook kidney beans in onion tomato gravy."
  },
  {
    id: 46,
    title: "Pav Bhaji",
    imgurl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/20/df50f723-358d-4af0-970f-b008c43a29c6_72cb5a76-78b7-4a7b-a1a1-340d0cb6fc88.jpg",
    cuisine: "Indian",
    ingredients: [
      { name: "Mixed vegetables", quantity: "2 cups" },
      { name: "Pav", quantity: "2" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Pav Bhaji masala", quantity: "1 tbsp" }
    ],
    instruction: "Cook mashed vegetables with masala and serve with buttered pav."
  },
  {
    id: 47,
    title: "Kadai Paneer",
    imgurl: "https://www.allrecipes.com/thmb/3JpVzhECzrucX5gUHhWx9FDQ1LY=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/232203-paneer-butter-masala-VAT-003-4x3-01spooninfood-f41f265726644c1dbf4b703e04041a35.jpg",
    cuisine: "Indian",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Capsicum", quantity: "1/2 cup" },
      { name: "Tomatoes", quantity: "2" },
      { name: "Spices", quantity: "2 tbsp" }
    ],
    instruction: "Sauté paneer with bell peppers in spiced tomato gravy."
  },
  {
    id: 48,
    title: "Aloo Paratha",
    imgurl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cx1bqivgkad8j8i3mko0",
    cuisine: "Indian",
    ingredients: [
      { name: "Wheat flour", quantity: "2 cups" },
      { name: "Potato", quantity: "2 boiled" },
      { name: "Spices", quantity: "1 tbsp" },
      { name: "Butter", quantity: "1 tbsp" }
    ],
    instruction: "Stuff spiced potato in dough and roast with butter."
  },
  {
    id: 49,
    title: "Sambar",
    imgurl: "https://www.allrecipes.com/thmb/7uPdHpsUndsjgTAiOyv-lfMDbww=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/199441-66cd41a8e89748df9370a238a69f975d.jpg",
    cuisine: "Indian",
    ingredients: [
      { name: "Toor dal", quantity: "1 cup" },
      { name: "Tamarind", quantity: "1 tbsp" },
      { name: "Vegetables", quantity: "1 cup" },
      { name: "Sambar powder", quantity: "1 tbsp" }
    ],
    instruction: "Boil dal with veggies and spices."
  },
  {
    id: 50,
    title: "Hyderabadi Haleem",
    imgurl: "https://www.allrecipes.com/thmb/KX_jiN5SpGOXcHvYmkAH-hR-I1c=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RM_16102_ChickenBiryani_ddmfs_3x4_5315-236dfbbc7965498cac20b87797841b69.jpg ",
    cuisine: "Indian",
    ingredients: [
      { name: "Wheat", quantity: "1/2 cup" },
      { name: "Mutton", quantity: "250g" },
      { name: "Lentils", quantity: "1/4 cup" },
      { name: "Spices", quantity: "2 tbsp" }
    ],
    instruction: "Slow-cook meat and lentils into a smooth paste."
  },
  {
    id: 51,
    title: "Baingan Bharta",
    imgurl: "https://www.allrecipes.com/thmb/3gEr4YocAv7vQDvfT4bg2IkD1rQ=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1055319-baingan-bharta-eggplant-curry-drzhivago73-4x3-1-1730f7a2981d434d8bbeaeea416c8edf.jpg",
    cuisine: "Indian",
    ingredients: [
      { name: "Eggplant", quantity: "1 large" },
      { name: "Onion", quantity: "1" },
      { name: "Tomato", quantity: "1" },
      { name: "Spices", quantity: "1 tbsp" }
    ],
    instruction: "Roast eggplant, mash and cook with spices."
  },

  // Chinese (6 more)
  {
    id: 52,
    title: "Tofu salad",
    imgurl: "https://www.allrecipes.com/thmb/7AZdqd7-x1Qw4XJsNXYY2gP2BGs=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8229092-efac8c353602472e81edbc8457c17a0d.jpg",
    cuisine: "Chinese",
    ingredients: [
      { name: "Tofu", quantity: "200g" },
      { name: "Ground pork", quantity: "100g" },
      { name: "Chili bean paste", quantity: "2 tbsp" },
      { name: "Garlic", quantity: "1 clove" }
    ],
    instruction: "Cook tofu in spicy sauce with pork."
  },
  {
    id: 53,
    title: "Hot and Sour Soup",
    imgurl: "https://www.allrecipes.com/thmb/Ns4vshTmNnJjaFuHQb5aoRxadiA=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3423584-88bb1d7ddc034419b8486057976a1e82.jpg",
    cuisine: "Chinese",
    ingredients: [
      { name: "Mushrooms", quantity: "1/2 cup" },
      { name: "Tofu", quantity: "100g" },
      { name: "Soy sauce", quantity: "2 tbsp" },
      { name: "Vinegar", quantity: "1 tbsp" }
    ],
    instruction: "Boil ingredients in spicy tangy broth."
  },
  {
    id: 54,
    title: "Egg Fried Rice",
    imgurl: "https://www.allrecipes.com/thmb/OEHVOxZ-_HzZ6CmXeYtDKYt-cmI=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5336832-2dcaf36f7f8d40b1a5fb8ea4a22ed821.jpg",
    cuisine: "Chinese",
    ingredients: [
      { name: "Cooked rice", quantity: "2 cups" },
      { name: "Eggs", quantity: "2" },
      { name: "Spring onions", quantity: "1/4 cup" },
      { name: "Soy sauce", quantity: "1 tbsp" }
    ],
    instruction: "Scramble eggs and stir-fry with rice and seasonings."
  },
  {
    id: 55,
    title: "Dim Sum",
    imgurl: "https://www.allrecipes.com/thmb/1jVwlERPpy2Ihs1-gV7YSGQ0OF4=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/246042_KhanomJeebPorkandShrimpDumplings_DanielleK-dc5a6b6db35b41a099e23ad7b7e0a810.jpg",
    cuisine: "Chinese",
    ingredients: [
      { name: "Dumpling wrappers", quantity: "12" },
      { name: "Pork filling", quantity: "200g" },
      { name: "Ginger", quantity: "1 tsp" },
      { name: "Soy sauce", quantity: "1 tbsp" }
    ],
    instruction: "Stuff wrappers and steam until cooked."
  },
  {
    id: 56,
    title: "Sweet and Sour Pork",
    imgurl: "https://www.allrecipes.com/thmb/bc4YerdduXmuUZqu4aTGXkjfY44=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/282440-slow-cooker-sweet-and-sour-chicken-thighs-fabeveryday-52ce156df47d4b6290f32baa912a2e3a.jpeg",
    cuisine: "Chinese",
    ingredients: [
      { name: "Pork", quantity: "200g" },
      { name: "Bell pepper", quantity: "1/2 cup" },
      { name: "Pineapple", quantity: "1/4 cup" },
      { name: "Sauce", quantity: "1/2 cup" }
    ],
    instruction: "Stir-fry pork with sweet and sour sauce."
  },
  {
    id: 57,
    title: "Char Siu (BBQ Pork)",
    imgurl: "https://www.allrecipes.com/thmb/Hir_Io4YvOqCGI_0wm88nqeEKOw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4525770-chinese-barbeque-pork-char-siu-Chef-John-1x1-1-e555eae3581c40d1b080679ff29a801c.jpg",
    cuisine: "Chinese",
    ingredients: [
      { name: "Pork shoulder", quantity: "300g" },
      { name: "Hoisin sauce", quantity: "2 tbsp" },
      { name: "Honey", quantity: "1 tbsp" },
      { name: "Five spice", quantity: "1 tsp" }
    ],
    instruction: "Marinate pork and roast until caramelized."
  },

  {
  id: 58,
  title: "Pani Puri",
  imgurl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/1/07/0/FNK_Pani-Puri_s4x3.jpg.rend.hgtvcom.476.357.suffix/1546894450909.jpeg",
  cuisine: "Indian",
  ingredients: [
    { name: "Semolina puris", quantity: "12 pcs" },
    { name: "Boiled potatoes", quantity: "1 cup" },
    { name: "Tamarind chutney", quantity: "4 tbsp" },
    { name: "Spicy mint water", quantity: "1 cup" }
  ],
  instruction: "Stuff puris with potato, chutney, and dip in spicy mint water before serving."
},

{
  id: 59,
  title: "Idli",
  imgurl: "https://www.allrecipes.com/thmb/O_e9zSGbV8o9yZeCYpXwg65Elso=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8195764-4e3eaeab1ee846aa92795f1d3b633c80.jpg",
  cuisine: "Indian",
  ingredients: [
    { name: "Rice", quantity: "2 cups" },
    { name: "Urad dal", quantity: "1 cup" },
    { name: "Fenugreek seeds", quantity: "1 tsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  instruction: "Soak, grind, and ferment the batter. Steam in molds until soft and fluffy."
},
{
  id: 60,
  title: "Veg Pulav",
  imgurl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rqocnbhgszfrpwmajj8u",
  cuisine: "Indian",
  ingredients: [
    { name: "Basmati rice", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "1 cup" },
    { name: "Cumin seeds", quantity: "1 tsp" },
    { name: "Garam masala", quantity: "1 tsp" }
  ],
  instruction: "Sauté spices and vegetables, add rice and water. Cook until rice is fluffy."
}
];

export default recipes;
