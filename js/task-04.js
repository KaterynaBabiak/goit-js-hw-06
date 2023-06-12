
const counterValue = document.getElementById('value')
const counterValueIncrease = document.querySelector('[data-action="increment"]')
const counterValueDecrease = document.querySelector('[data-action="decrement"]')

let currentValue = 0

counterValueIncrease.addEventListener('click', function() {
    currentValue += 1
    counterValue.textContent = currentValue;
  });

  counterValueDecrease.addEventListener('click', function() {
    currentValue -= 1
    counterValue.textContent = currentValue;
  });