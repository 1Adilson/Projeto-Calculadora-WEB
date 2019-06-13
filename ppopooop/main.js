function soma() {
    
    
    var numero_1 = document.querySelector('#campo-1').value;
    var numero_2 = document.querySelector('#campo-2').value;
    var resultado =parseInt(numero_1, 10) + parseInt(numero_2, 10);
    document.querySelector('#resultado').setAttribute('value', resultado);
}

function divisao() {
    
    
    var numero_1 = document.querySelector('#campo-1').value;
    var numero_2 = document.querySelector('#campo-2').value;
    var resultado =parseInt(numero_1, 10) / parseInt(numero_2, 10);
    document.querySelector('#resultado').setAttribute('value', resultado);
}
function multiplicacao() {
    
    
    var numero_1 = document.querySelector('#campo-1').value;
    var numero_2 = document.querySelector('#campo-2').value;
    var resultado =parseInt(numero_1, 10) * parseInt(numero_2, 10);
    document.querySelector('#resultado').setAttribute('value', resultado);
}
function subtracao() {
    
    
    var numero_1 = document.querySelector('#campo-1').value;
    var numero_2 = document.querySelector('#campo-2').value;
    var resultado =parseInt(numero_1, 10) - parseInt(numero_2, 10);
    document.querySelector('#resultado').setAttribute('value', resultado);
}





