// Starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// Navigation
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});

// Now we use an array to include the objects:
//      ** brand, model, color, price and year 

const cars = [{
        brand: "Lamborghini",
        model: "Aventator",
        color: "White",
        price: 10000000,
        year: 2019,
        description: "It's potence its 700 to 770 CV (690 to 759 HP) (515 to 566 kW) and its used, however his motor is a V12 to 60° atmospheric of 6498 cm³ (6,5 lts). It has no problems",
        id: 1,
    },

    {
        brand: "Mclaren",
        model: "720W",
        color: "black",
        price: 478000000,
        year: 2013,
        description: "This car has a power output of V12 to 60° atmospheric of 6498 cm³ (6,5 lts), has a 7-speed dual-clutch and has problems with the engine",
        id: 2,
    },
];


let editingCars = false;

// Relative to the cards
function printCars() {
    const cards = document.getElementById('cars-cards')
    cards.innerHTML = ''
    cars.forEach((car) => {
        const card = `
            

                <div class="col-lg-6 col-md-12 col-sm-6">
                    <div class="card-body">
                    <img src="https://images.pexels.com/photos/4046415/pexels-photo-4046415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img">
                        <div class="card">  
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Brand: ${car.brand}</li>
                                <li class="list-group-item">Model: ${car.model}</li>
                                <li class="list-group-item">Color: ${car.color}</li>
                                <li class="list-group-item">Price: $${car.price}</li>
                            </ul>
                            <div class="card-body">
                                <h5 class="card-title">Description:</h5>
                                <p class="card-text">${car.description}</p>
                            </div>
                            <div class="card-body">
                                <button class="btn btn-outline-danger mr-3" onclick="removeCar(${car.id})">Delete</button>
                                <a href="#form" type="button" class="btn btn-outline-primary" onclick="editCarButton(${car.id})">Update</a>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            
            `
        cards.innerHTML += card;
    })
}

// submitCar() to create the table, so we check if we edit or add a car
function submitCar() {
    editingCars ? editCar() : addCar();
}

// editCar() to get the array and manipulate our elements
function editCar() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    const description = document.getElementById('description').value;
    editingCars.brand = brand
    editingCars.model = model
    editingCars.color = color
    editingCars.price = price
    editingCars.year = year
    editingCars.description = description
    printCars();
    editingCars = false;
    document.getElementById('brand').value = ''
    document.getElementById('model').value = ''
    document.getElementById('color').value = ''
    document.getElementById('price').value = ''
    document.getElementById('year').value = ''
    document.getElementById('description').value = ''
}

// Get the elements to edit themselves
function editCarButton(id) {
    const car = cars.find((car) => car.id === id);
    // const car = cars[position];
    //document.getElementById('module').value = car.module;
    const brand = document.getElementById('brand').value = car.brand;
    const module = document.getElementById('model').value = car.model;
    const color = document.getElementById('color').value = car.color;
    const price = document.getElementById('price').value = car.price;
    const year = document.getElementById('year').value = car.year;
    const description = document.getElementById('description').value = car.description;
    editingCars = car;
}

// Now we put the cars into the card
function addCar() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    const description = document.getElementById('description').value;
    const newCar = {
        id: cars.length + 1,
        brand: brand,
        model: model,
        color: color,
        price: price,
        year: year,
        description: description,
    }
    cars.push(newCar);
    printCars();
}

// find the object to erase by the method findIndex
function removeCar(id) {
    const position = cars.findIndex((car) => car.id === id);
    cars.splice(position, 1);
    printCars();
}

// Print the objects by calling the dunction:
printCars();