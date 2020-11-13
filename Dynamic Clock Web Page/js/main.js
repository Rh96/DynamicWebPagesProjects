// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    ourFocus = document.getElementById('focus');


// Options
const showAmPm = true; 
// Show time
function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}
    ${showAmPm ? amPm : ''}`;


    setTimeout(showTime, 1000);
}
// add zeroo
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
// Set Background and Greeting

function setBgGreet(){
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12){
        // Morning
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'white';
    }
    else if(hour < 18){
        // Afternoon
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }
    else {
        // Evening
        document.body.style.backgroundImage = "url('img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// get name
function getName(){
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    }else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e){
    if(e.type === 'keypress'){
        // make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else {
        localStorage.setItem('name', e.target.innerText);
    }
}


// Get focus
function getFocus(){
    if(localStorage.getItem('focus') === null) {
        ourFocus.textContent = '[Enter Focus]';
    }else {
        ourFocus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e){
    if(e.type === 'keypress'){
        // make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            ourFocus.blur();
        }
    }else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
ourFocus.addEventListener('keypress', setFocus);
ourFocus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();