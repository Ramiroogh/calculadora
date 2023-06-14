let inputField = document.querySelector('input');
let inputKeyword = document.querySelector('#inputKeyword');
let copyButton = document.querySelector('#copyButton');

function appendNumber(number) {
    inputField.value += number;
}
function appendOperator(operator) {
    inputField.value += operator;
}
function appendDecimal() {
    if (!inputField.value.includes('.')) {
    inputField.value += '.';
    }
}

function calculate() {
    try {
    inputField.value = eval(inputField.value);
    } catch (error) {
    inputField.value = 'Error';
    }
}
// Clear Button
function clearInput() {
    inputField.value = '';
}

inputKeyword.addEventListener('input', function (event) {
    const value = event.target.value;
    
    // Validar la entrada con expresión regular
    const allowedCharactersRegex = /^[0-9+\-*/]+$/;
    
    if (!allowedCharactersRegex.test(value)) {
    // Remover caracteres no permitidos
        event.target.value = value.replace(/[^0-9+\-*/]/g, '');
        }
});
inputField.addEventListener('change', function() {
    const value = parseFloat(inputField.value);
    if (!isNaN(value)) {
        copyButton.disabled = false;
        } else {
        copyButton.disabled = true;
        }
});
copyButton.addEventListener('click', function() {
    const value = parseFloat(inputField.value);
    if (!isNaN(value)) {
        navigator.clipboard.writeText(value.toString())
        .then(function() {
            alert("Valor copiado al portapapeles");
        })
        .catch(function() {
            alert("Error al copiar el valor");
        });
    }
});