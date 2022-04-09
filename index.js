// console.log("This is index.js");

//object oriented 
//prototypes


//constructor
function Book(name, author, genre) {

    this.name = name;
    this.author = author;
    this.genre = genre;
}

//Display constructor
function Display() {

}
//adding prototypes to Display
//add function
Display.prototype.add = function (book) {

    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.genre}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

//clear function
Display.prototype.clear = function () {

    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

//validate function
Display.prototype.validate = function (book) {

    if(book.name.length<2 || book.author.length<2 ){

        return false;
    }
    else{
        return true;
    }
}

Display.prototype.show = function(type,msg){
    let messaage = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade                  show" role="alert">
                        <strong>Message: </strong> ${msg}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;

    setTimeout(function () {
        messaage.innerHTML = ''
        
    }, 1000);
}



//add submit event listener to form libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);


function libraryFormSubmit(e) {

    // console.log("You have submitted library form");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let genre;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        genre = fiction.value;
    }
    else if (programming.checked) {
        genre = programming.value;
    }
    else if (cooking.checked) {
        genre = cooking.value;
    }

    let book = new Book(name, author, genre);
    console.log(book);

    let display = new Display();
    if (display.validate(book)){

        display.add(book);
        display.clear();
        display.show('success','Your book has been succesfully added');
    }
    else {
        //show error
        display.show('danger','Sorry you cannot add this book.');
    }

    e.preventDefault();
}







