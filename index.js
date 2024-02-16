// JavaScript Window Object
function windowAction(){
    //alert("Hello")
    //let result = confirm("Are you ready")
    //let result = prompt("Your ID Please")
    //open("https://www.linkedin.com/in/coderrehad/")
    //close()
    /*
    setTimeout(function (){
        open("https://www.linkedin.com/in/coderrehad/")
    },5000)
     */
    console.log()
}


// JavaScript Navigator Object
let appCodeName = navigator.appCodeName;
let appName = navigator.appName;
let appVersion = navigator.appVersion;
let cookieEnabled = navigator.cookieEnabled;
let language = navigator.language;
let userAgent = navigator.userAgent;
let platform = navigator.platform;
let onLine = navigator.onLine;


document.write("appCodeName: " + appCodeName+"<br/><br/>")
document.write("appName: " + appName+"<br/><br/>")
document.write("appVersion: " + appVersion+"<br/><br/>")
document.write("cookieEnabled: " + cookieEnabled+"<br/><br/>")
document.write("language: " + language+"<br/><br/>")
document.write("userAgent: " + userAgent+"<br/><br/>")
document.write("platform: " + platform+"<br/><br/>")
if(onLine === true){
    //alert("Your internet connection was restored.")
}else{
    alert("You Are Currently Offline")
}

//JavaScript Geolocation
/*
navigator.geolocation.getCurrentPosition(function (position) {
    let accuracy = position.coords.accuracy
    let altitude = position.coords.altitude
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    let speed = position.coords.speed
    let heading = position.coords.heading
    console.log(`accuracy: ${accuracy}`)
    console.log(`altitude: ${altitude}`)
    console.log(`latitude: ${latitude}`)
    console.log(`longitude: ${longitude}`)
    console.log(`speed: ${speed}`)
    console.log(`heading: ${heading}`)
})
 */


//JavaScript Event
function Click() {
    console.log("Hello world")
}

function ClickOver() {
    console.log("Mouse Over")
}

function ClickOut() {
    console.log("Mouse Out")
}

function onEvent(text) {
    console.log(text)
}


// JavaScript Dom Change Element
let heading = document.getElementById('heading')
heading.innerHTML = "This is heading"

let pera = document.getElementsByClassName('pera')
pera[0].innerHTML="This is paragraph"

// html Dom Document
function DemoFunc() {
    console.log(
        //document.domain
        //document.cookie
        //document.URL
        //document.baseURI
        //document.title
        //document.location
    )
    /*
    document.open('text/html','replace')
    document.write('<button>OnChange</button><br/><br/>')
    document.close()
     */

    /*
    let w = window.open()
    w.document.open()
    w.document.write('New Window')
    w.document.close()
     */

    let Pera = document.getElementsByTagName('p')
    //console.log(Pera.length)

    // Dom Working With Input
    let inputOne = document.getElementById('inputOne').value
    let inputTwo = document.getElementById('inputTwo').value
    console.log(parseInt(inputOne)+parseInt(inputTwo))
}


// Dom Manipulate CSS Class
let ClassText = document.getElementById('ClassText')

function AddCSS() {
    ClassText.classList.add('text-success')
}

function RemoveCSS() {
    ClassText.classList.remove('text-success')
}

function ToggleCSS() {
    ClassText.classList.toggle('text-success')
}


//Create Element Append Element
function ElementButton() {
    let ElementInput = document.getElementById('ElementInput').value;
    let ElementMenu = document.getElementById('ElementMenu');

    let ListItem = document.createElement('li');
    ListItem.innerHTML = ElementInput;

    ElementMenu.appendChild(ListItem)
}

// DOM Change Attribute Value
function changeImg() {
    let MyImg = document.getElementById('MyImg')
    MyImg.src="https://th.bing.com/th/id/OIG.MC3PObbEmuJhfsPJ8biQ"
}

// DOM Query Selector
function ChangeElements() {
    document.querySelector('#MyID').innerHTML = "h1 manipulated"
    document.querySelector('.MyClass').innerHTML = "h2 manipulated"
    document.querySelector('p[name="MyName"]').innerHTML = "p manipulated"
    document.querySelector('h6').innerHTML = "h6 manipulated"
}

//  Ajax Get Request In Details
function getRequest () {
    let URL = "https://jsonplaceholder.typicode.com/users"
    let Option = {method:"Get"}
    fetch(URL,Option)
        .then(response=>response.json())
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
}
