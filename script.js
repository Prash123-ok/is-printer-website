//function 1 for navigation
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});


//function 2 Color change

const name = document.querySelector(".name");

function changeColor(color) {
    name.style.color = color;
}

//function 2 Form Validation 
const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('Please fill in all fields');
    } else if (!email.includes('@')) {
        alert('Please enter a valid email address');
    } else {
        alert('Form submitted successfully');
    }
});