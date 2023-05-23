

const pageIds = [
    'forst',
    'recept',
    'odling',
    'bokrekommendationer',
    'sy',
    'musik'
    
]

console.log(pageIds)

const pages = pageIds.map(id => document.getElementById(id));

console.log(pages);

function changePage(newPageId) {
    return ()=>{pages.forEach((page) => {
        page.style.display = page.id == newPageId ? "block" : "none";
    })};
}

function createListener(id, page) {
    document.querySelector(id).addEventListener('click', changePage(page));
}

createListener('#mainen', "forst");
document.querySelector('#mat').addEventListener('click', changePage("recept"));
document.querySelector('#vaxter').addEventListener('click', changePage("odling"));
document.querySelector('#bocker').addEventListener('click', changePage("bokrekommendationer"));
document.querySelector('#sys').addEventListener('click', changePage("sy"));
document.querySelector('#music').addEventListener('click', changePage("musik"));


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
  var button = el.querySelector('h3[data-toggle="dropdown"]'),
      menu = el.querySelector('.dropdown-menu'),
      arrow = button.querySelector('i.icon-arrow');

  button.onclick = function(event) {
    if(!menu.hasClass('show')) {
      menu.classList.add('show');
      menu.classList.remove('hide');
      arrow.classList.add('open');
      arrow.classList.remove('close');
      event.preventDefault();
    }
    else {
      menu.classList.remove('show');
      menu.classList.add('hide');
      arrow.classList.remove('open');
      arrow.classList.add('close');
      event.preventDefault();
    }
  };
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

getRandomCatFacts()

function getRandomCatFacts() {

    fetch("https://catfact.ninja/fact")
        .then(function (response) {
            return response.json();
        })
        .then((response) => {
            let cat = response;
            console.log(cat);
            document.querySelector('.apin').innerHTML =  "Booklovers fact of the day: " + cat.fact;
        })
        .catch(function (err) {
            console.log('Error: ' + err);
            document.querySelector(".api").innerHTML =
                "Sorry, vi kan inte hämta data just nu. Försök senare!"
     
        });
}


const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)
