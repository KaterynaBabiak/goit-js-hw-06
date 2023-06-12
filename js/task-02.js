const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients')

const ingredientEls = ingredients.map(ingredient => {
  const byLi = document.createElement('li');
  byLi.classList.add('item');
  byLi.textContent = ingredient;
  return byLi;
});

ingredientsList.append(...ingredientEls);
