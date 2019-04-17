"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h2 class="d-inline">' + coffee.name + ' ' + '</h2>';
    html += '<p class="d-inline">' + ' ' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var filteredCoffeesForFiltering = coffees;

function updateCoffees(e) {
    /*e.preventDefault();*/ // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all"){
            filteredCoffees = coffees;
            filteredCoffeesForFiltering = coffees;
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
    filteredCoffeesForFiltering = filteredCoffees;
    return filteredCoffeesForFiltering
}

function fuckBitchesGetMoney() {
    var coffeeSearch = document.getElementById("coffeename").value;
    var searchFilteredCoffee= [];
    filteredCoffeesForFiltering.forEach(function(coffee){
        if (coffee.name.toLowerCase().includes(coffeeSearch.toLowerCase())){
            searchFilteredCoffee.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(searchFilteredCoffee);
}

function addCoffee() {
    var newRoast = document.getElementById("inputGroupSelect01").value;
    var oldCoffeeInput = document.getElementById("newCoffeeName").value;
    var middleCoffeeInput = oldCoffeeInput.split(' ');
    for (var i=0; i<middleCoffeeInput.length; i++){
        middleCoffeeInput[i] = middleCoffeeInput[i].charAt(0).toUpperCase() + middleCoffeeInput[i].slice(1);
    }
    var newCoffeeInput = middleCoffeeInput.join(' ');
    var newCoffee = {};
        newCoffee.id=coffees.length + 1;
        newCoffee.name=newCoffeeInput;
        newCoffee.roast=newRoast;
        coffees.push(newCoffee);
        tbody.innerHTML = renderCoffees(coffees);
}


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#addCoffee');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', addCoffee);
