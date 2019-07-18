"use strict";


function renderCoffee(coffee) {
    var html = '<div id="'+ coffee.id +'" data-toggle="modal" onclick="createModal(this)" data-target="#exampleModalScrollable" class="coffee">';
    html += '<h2  class="d-inline">' + coffee.name + ' ' + '</h2>';
    html += '<p class="d-inline text-muted">' + ' ' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}
function createModal(input) {
    var heading = document.getElementById('modalTitle');
    var coffeeOrigin = document.getElementById('coffeeOrigin');
    var tastingNotes = document.getElementById('tastingNotes');
    var imgDiv = document.getElementById('imgDiv');
    var mapContainer = document.getElementById('coffeeButton');
    var inputid = input.id;
    console.log(input);
    coffees.forEach(function(coffee){
        if (coffee.id == inputid){
            heading.innerText = coffee.name;
            imgDiv.src = coffee.img;
            coffeeOrigin.innerText = coffee.origin;
            tastingNotes.innerText = coffee.taste;
            map.flyTo({
                center: coffee.center
            });
            var marker = new mapboxgl.Marker()
                .setLngLat(coffee.center)
                .addTo(map)

        }
    });
}


/*

function coffeeData() {
    var firstCoffee = document.getElementById('1');
    console.log(firstCoffee);
    /!*document.getElementById('exampleModalScrollableTitle').innerText = firstCoffee*!/
}

*/

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
var coffees = [
    {id: 1, name: 'Light City',
        roast: 'light',
        origin: 'Ethiopia',
        taste: 'Taste notes: Milk chocolate, apricot jam, dulce de leche, passion fruit, & pumpkin pie spice. Creamy, velvety mouthfeel with medium body & an approachable white peach malic acidity. Hints of apple & pineapple juice on the linger.',
        img: 'img/lightcity.jpg',
        center: [38.73694, 9.02722],

    },
    {id: 2, name: 'Half City'
        , roast: 'light',
        origin: 'Ethiopia',
        taste: 'On the nose: citrus, sweet sugared pineapple. Taste: Meyer lemon, fresh red currant, cane sugar, & hints of pineapple juice. Delicate & Fruity. A stunning flavor profile you\'ll absolutely love in any preparation.',
        img:'img/halfcity.jpg',
        center: [38.73694, 9.02722],
    },
    {id: 3, name: 'Cinnamon',
        roast: 'light',
        origin: 'Indonesia',
        taste: 'Taste notes: beautiful & unique coffee with red currant acidity atop a smooth bakers chocolate base.',
        img:'img/cinnamon.jpg',
        center: [98.71, 2.941],
    },
    {id: 4, name: 'City',
        roast: 'medium',
        origin: 'Guatemala',
        taste: 'Taste: Rich creamy milk chocolate, sweet fruit notes of strawberry, blackberry, golden raisin, mandarin orange, & slight rum as it cools.',
        img:'img/city.jpg',
        center: [-90.73333, 14.56667],
    },
    {id: 5, name: 'American',
        roast: 'medium',
        origin: 'Hawaii',
        taste: 'Complex, multi-layered, spice-toned. Coconut, blackberry, ginger blossom, wild honey, dark chocolate in aroma and cup. The structure is sweet, tart and savory in balance with juicy, bright acidity; plush, syrupy mouthfeel.',
        img:'img/america.jpg',
        center: [-155.97789, 19.72202],
    },
    {id: 6, name: 'Breakfast',
        roast: 'medium',
        origin: 'Costa Rica',
        taste: 'Brown sugar, lavender, blueberry, dark rum, banana liqueur, strawberry, hints of marmalade, grape juice, & almond biscotti.',
        img:'img/bfast.jpg',
        center: [-83.7534, 9.7489],
    },
    {id: 7, name: 'High',
        roast: 'dark',
        origin: 'Kenya',
        taste: 'Almond brittle, Fuji apple, creamy Dulce de Leche, milk chocolate, red grape, fruit tones of apricot & pineapple. Overall rich and round with crisp malic acidity.',
        img:'img/high.jpg',
        center: [36.81667, -1.28333],
    },
    {id: 8, name: 'Continental',
        roast: 'dark',
        origin: 'Latin America',
        taste: 'Spiced apple pie, plum pudding, almond brittle, maple syrup, & allspice. Great medium body complemented with a silky Red Anjou pear acidity coming through. This pulped natural process coffee is truly exquisite.',
        img:'img/continental.jpg',
        center: [-90.73333, 14.56667],
    },
    {id: 9, name: 'New Orleans',
        roast: 'dark',
        origin: 'New Orleans',
        taste: 'Spiced apple pie, plum pudding, almond brittle, maple syrup, & allspice. Great medium body complemented with a silky Red Anjou pear acidity coming through. This pulped natural process coffee is truly exquisite.',
        img:'img/neworleans.jpg',
        center: [-89.93, 30.04],
    },
    {id: 10, name: 'European',
        roast: 'dark',
        origin: 'Netherlands',
        taste: 'Taste notes: beautiful & unique coffee with red currant acidity atop a smooth bakers chocolate base.',
        img:'img/euro.jpg',
        center: [4.3007, 52.0705],
    },
    {id: 11, name: 'Espresso',
        roast: 'dark',
        origin: 'Global',
        taste: 'Taste notes: Milk chocolate, apricot jam, dulce de leche, passion fruit, & pumpkin pie spice. Creamy, velvety mouthfeel with medium body & an approachable white peach malic acidity. Hints of apple & pineapple juice on the linger.',
        img:'img/espresso.png',
        center: [-75.1216, 20.0117],
    },
    {id: 12, name: 'Viennese',
        roast: 'dark',
        origin: 'Italy',
        taste: 'Almond brittle, Fuji apple, creamy Dulce de Leche, milk chocolate, red grape, fruit tones of apricot & pineapple. Overall rich and round with crisp malic acidity.',
        img:'img/vienna.png',
        center: [11.49, 43.06],
    },
    {id: 13, name: 'Italian',
        roast: 'dark',
        origin: 'Italy',
        taste: 'Almond brittle, Fuji apple, creamy Dulce de Leche, milk chocolate, red grape, fruit tones of apricot & pineapple. Overall rich and round with crisp malic acidity.',
        img:'img/italian.jpg',
        center: [11.49, 43.06],
    },
    {id: 14, name: 'French',
        roast: 'dark',
        origin: 'France',
        taste: 'On the nose: citrus, sweet sugared pineapple. Taste: Meyer lemon, fresh red currant, cane sugar, & hints of pineapple juice. Delicate & Fruity. A stunning flavor profile you\'ll absolutely love in any preparation.',
        img:'img/french.jpg',
        center: [1.688333, 45.436105],
    },
];

var filteredCoffeesForFiltering = coffees //+ loadcoffee();


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

function updateOnKeyDown() {
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
    var newCoffeeImg = document.getElementById('newCoffeeImg').value;
    var newCoffeeOrigin = document.getElementById('newCoffeeOrigin').value;
    var coffeeOrigin;
    var newCoffeeTaste = document.getElementById('newCoffeeTaste').value;
    var coffeeTaste;
    var oldCoffeeInput = document.getElementById("newCoffeeName").value;

    var coffeeImg;
    var middleCoffeeInput = oldCoffeeInput.split(' ');
    for (var i=0; i<middleCoffeeInput.length; i++){
        middleCoffeeInput[i] = middleCoffeeInput[i].charAt(0).toUpperCase() + middleCoffeeInput[i].slice(1);
    }
    var newCoffeeInput = middleCoffeeInput.join(' ');
    var newCoffee = {};
        newCoffee.id=coffees.length + 1;
        newCoffee.name=newCoffeeInput;
        newCoffee.roast=newRoast;
        newCoffee.center = [-95.3698, 29.7604];

        newCoffee.img = coffeeImg = (newCoffeeImg) ? newCoffee.img = newCoffeeImg : newCoffee.img = "https://via.placeholder.com/150\n" +
            "\n" +
            "C/O https://placeholder.com/";
        newCoffee.origin = coffeeOrigin = (newCoffeeOrigin) ? newCoffee.origin = newCoffeeOrigin : newCoffee.origin = 'The land of the ice and snow';
        newCoffee.taste = coffeeTaste = (newCoffeeTaste) ? newCoffee.taste = newCoffeeTaste : newCoffee.taste ='Scrumdidlyumptious';
    coffees.push(newCoffee);
        savecoffee();
        loadcoffee();
        tbody.innerHTML = renderCoffees(coffees);
}


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#addCoffee');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', addCoffee, false);
submitButton.addEventListener('click', deleteInputs, false);




mapboxgl.accessToken = mapboxKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 5,
    center: [-95.58673, 29.73733],
});

/*var marker = new mapboxgl.Marker()
    .setLngLat(map.center)
    .addTo(map);*/



function savecoffee() {
    localStorage.setItem('local_coffee', JSON.stringify(coffees));
    console.log("Saved local storage");
}
function loadcoffee() {
    coffees = JSON.parse(localStorage.getItem('local_coffee'));
    console.log("Loaded local storage")
}

function deleteInputs() {
    document.getElementById('newCoffeeName').value = '';
    document.getElementById('newCoffeeImg').value = '';
    document.getElementById('newCoffeeOrigin').value = '';
    document.getElementById('newCoffeeTaste').value = '';

}



/*

localStorage.clear();
*/


