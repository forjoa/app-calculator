let bill = document.querySelector('#bill').value;
let num_people = document.querySelector('#num-people').value;
const five = document.getElementById('five');
const ten = document.getElementById('ten');
const fifteen = document.getElementById('fifteen');
const tweentyfive = document.getElementById('tweentyfive');
const fifty = document.getElementById('fifty');
const custom = document.getElementById('custon');

const tip = document.getElementById('tip');
const total = document.getElementById('total');

const reset = document.getElementById('reset');

five.addEventListener('click', ()=>{
    let bill = document.querySelector('#bill').value;
    let num_people = document.querySelector('#num-people').value;
    let total_tip = Number(bill) * 0.05;
    let tippp = Number(total_tip) / Number(num_people);
    let totalpp = (Number(total_tip) + Number(bill)) / Number(num_people);
    tip.innerHTML = '$'+tippp.toFixed(2);
    total.innerHTML = '$'+totalpp.toFixed(2);
});

ten.addEventListener('click', ()=>{
    let bill = document.querySelector('#bill').value;
    let num_people = document.querySelector('#num-people').value;
    let total_tip = Number(bill) * 0.1;
    let tippp = Number(total_tip) / Number(num_people);
    let totalpp = (Number(total_tip) + Number(bill)) / Number(num_people);
    tip.innerHTML = '$'+tippp.toFixed(2);
    total.innerHTML = '$'+totalpp.toFixed(2);
});

fifteen.addEventListener('click', ()=>{
    let bill = document.querySelector('#bill').value;
    let num_people = document.querySelector('#num-people').value;
    let total_tip = Number(bill) * 0.15;
    let tippp = Number(total_tip) / Number(num_people);
    let totalpp = (Number(total_tip) + Number(bill)) / Number(num_people);
    tip.innerHTML = '$'+tippp.toFixed(2);
    total.innerHTML = '$'+totalpp.toFixed(2);
});

tweentyfive.addEventListener('click', ()=>{
    let bill = document.querySelector('#bill').value;
    let num_people = document.querySelector('#num-people').value;
    let total_tip = Number(bill) * 0.25;
    let tippp = Number(total_tip) / Number(num_people);
    let totalpp = (Number(total_tip) + Number(bill)) / Number(num_people);
    tip.innerHTML = '$'+tippp.toFixed(2);
    total.innerHTML = '$'+totalpp.toFixed(2);
})

fifty.addEventListener('click', ()=>{
    let bill = document.querySelector('#bill').value;
    let num_people = document.querySelector('#num-people').value;
    let total_tip = Number(bill) * 0.5;
    let tippp = Number(total_tip) / Number(num_people);
    let totalpp = (Number(total_tip) + Number(bill)) / Number(num_people);
    tip.innerHTML = '$'+tippp.toFixed(2);
    total.innerHTML = '$'+totalpp.toFixed(2);
})

reset.addEventListener('click',()=>{
    document.querySelector('#bill').value = '';
    document.querySelector('#num-people').value = '';
    tip.innerHTML = '$0.00';
    total.innerHTML = '$0.00';
})

