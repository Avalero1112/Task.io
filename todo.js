//jshint esversion:6
//Selectors
const inputField = document.getElementById('inputField');
const addToDoButton = document.getElementById('addToDo');
const inputContainer = document.getElementById('box');
const boxes = document.getElementById('boxes');
const important = document.getElementById('important');
const complete = document.getElementById('complete');
const completedMenu = document.getElementById('completedmenu');
const content = document.getElementById('completedContent');
const importante = document.getElementById('important1');
const importantMenu = document.getElementById('importantMenu');
const importantContent = document.getElementById('importantContent');
const popUp = document.getElementById('pop-up');
const pop = document.getElementById('pop');
const help = document.getElementById('help');

var textArray = [];
var completedItems = [];
var itemName = [];
var importItems = [];

function attachImportantAstrisk (li) {
  let astrisk = document.createElement('button');
  astrisk.className = "imp";
  astrisk.textContent = "*";
  li.append(astrisk)
}

addToDoButton.addEventListener('click', function() {

if (textArray.length < 10 && inputField.value.length > 0) {
    var paragraph = document.createElement('p');
    paragraph.classList.add('position');
    paragraph.innerText = inputField.value;
    var itemName = paragraph.innerText;
    textArray.push(itemName);
    inputField.value = "";
    //creates checkboxes
    var checkbox = document.createElement('INPUT');
    //var exclamation = document.createElement('submit');
    //for css styling and positioning
    const li = document.createElement('div');
    li.classList.add("liDiv");
    checkbox.classList.add('position1');
    //sets the type of input element
    checkbox.setAttribute("type", "checkbox");
    //appends them in the div
    inputContainer.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(paragraph);
    //important.appendChild(exclamation);
    console.log(textArray);
    //attachImportantAstrisk();

    checkbox.addEventListener('click', function () {
          paragraph.style.textDecoration = "line-through";
          completedItems.push(itemName);
          textArray.pop(itemName);
          console.log(completedItems);
          paragraph.classList.add('complete');
          checkbox.classList.add('complete');
          removeItem();
            let li = document.createElement('p');
            li.innerText = completedItems.slice(-1);
            content.appendChild(li);
          });
          function removeItem() {
            if (paragraph.classList.contains('complete'))
              setTimeout(() => { paragraph.classList.add('complete2'); }, 500);
              setTimeout(() => { checkbox.classList.add('complete2'); }, 500);
            }

    paragraph.addEventListener('click', function () {
        if (importItems.length <= 2) {
          importItems.push(paragraph);
          paragraph.classList.add('bold');
          paragraph.classList.add('important');
        
         checkbox.classList.add('complete2');
          importantContent.appendChild(paragraph);
      
      paragraph.addEventListener('click', function() {
        paragraph.classList.add('bold');
        content.appendChild(paragraph);
        importItems.pop(paragraph);
      })
    }})
      console.log(textArray);
     }})



popUp.addEventListener('click', function() {
  setTimeout(() => {popUp.style.opacity = 0; }, 600);
  setTimeout(() => {pop.style.opacity = 0;   }, 600);
});

complete.addEventListener('click', function() {
  completedMenu.classList.toggle('active');
  content.classList.toggle('active');
})

importante.addEventListener('click', function() {
  importantMenu.classList.toggle('active');
  importantContent.classList.toggle('active');
  })



    function myFunction() {
      if (paragraph.classList.contains(complete)) {
      setTimeout(() => { paragraph.classList.add('complete2'); }, 500);
      setTimeout(() => { checkbox.classList.add('complete2'); }, 500);
    }
    }

let menu = null;

document.addEventListener("DOMContentLoaded", function() {

menu = document.querySelector('.menu');
menu.classList.add("off");

document.addEventListener('contextmenu', showmenu);
menu.addEventListener('mouseleave', hidemenu);

function showmenu(ev) {
  ev.preventDefault();
  console.log(ev.clientX, ev.clientY);
  menu.style.top = `${ev.clientY - 20}px`;
  menu.style.left = `${ev.clientX - 20}px`;
  menu.classList.remove('off');
  menu.classList.add('active');
}

function hidemenu(ev) {
  menu.classList.add('off');
  menu.classList.remove('active');
  menu.style.top = '-200%';
  menu.style.left = '-200%';
  console.log("Menu hidden");
}
});
