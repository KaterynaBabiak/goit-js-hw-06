const fontSizeControler = document.getElementById('font-size-control');
const textChange = document.getElementById('text');
fontSizeControler.addEventListener('input', fontSizeChange)

function fontSizeChange(evt) {
    textChange.style.fontSize = evt.currentTarget.value +'px'
}