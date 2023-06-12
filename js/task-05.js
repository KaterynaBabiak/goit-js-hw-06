const input = document.getElementById("name-input");
const text = document.getElementById("name-output");

input.addEventListener('input', txtContent)
function txtContent (event) {
    if (input.value === '') {
        text.textContent = 'Anonymous';
      }
      else {
        text.textContent = event.currentTarget.value
      }
  }