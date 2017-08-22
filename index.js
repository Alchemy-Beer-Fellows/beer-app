function getLS(name){
    return JSON.parse(localStorage.getItem(name))
};

var names =[]

toLS();

var nameInput = document.getElementById('nameInput');


function toLS(){
    var str = JSON.stringify(names);
    localStorage.setItem('name', str);
};