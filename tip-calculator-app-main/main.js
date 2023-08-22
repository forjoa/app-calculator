// Función para calcular la propina y el total
function calculateTipAndTotal(tipPercentage) {
    let bill = parseFloat(document.querySelector('#bill').value);
    let num_people = parseInt(document.querySelector('#num-people').value);
    
    if (isNaN(bill) || isNaN(num_people) || num_people <= 0) {
        tip.innerHTML = '$0.00';
        total.innerHTML = '$0.00';
        return;
    }

    let total_tip = bill * (tipPercentage / 100);
    let tippp = total_tip / num_people;
    let totalpp = (total_tip + bill) / num_people;
    
    tip.innerHTML = '$' + tippp.toFixed(2);
    total.innerHTML = '$' + totalpp.toFixed(2);
}

// Event listeners para los botones de propina
five.addEventListener('click', () => {
    calculateTipAndTotal(5);
});

ten.addEventListener('click', () => {
    calculateTipAndTotal(10);
});

fifteen.addEventListener('click', () => {
    calculateTipAndTotal(15);
});

tweentyfive.addEventListener('click', () => {
    calculateTipAndTotal(25);
});

fifty.addEventListener('click', () => {
    calculateTipAndTotal(50);
});

// Event listener para el botón de reset
reset.addEventListener('click', () => {
    document.querySelector('#bill').value = '';
    document.querySelector('#num-people').value = '';
    tip.innerHTML = '$0.00';
    total.innerHTML = '$0.00';
});
