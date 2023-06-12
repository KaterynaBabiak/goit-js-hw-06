const inputControl = document.getElementById("validation-input");
const dataLengthValue = inputControl.getAttribute('data-length');

inputControl.addEventListener('blur', controlArea);

function controlArea (){
    if (inputControl.value.length === parseInt(dataLengthValue)) {
inputControl.classList.add('valid');
inputControl.classList.remove('invalid');
    }

    else if (inputControl.value.length === 0){
        inputControl.removeAttribute('class');
    }

    else {
        inputControl.classList.remove('valid');
        inputControl.classList.add('invalid');
    }

}