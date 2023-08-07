


addDiv();
const forms = document.forms;
const list = document.querySelector('ul');
const addButton = document.getElementById("search-button");
const searchBar = forms['search-books'].querySelector('input');

addButton.addEventListener("click", addListItem);
list.addEventListener("click", removeListItem);
searchBar.addEventListener("keyup", searchItem);

function searchItem(e) {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(e.target.value) != -1) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
};

function removeListItem(e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
}

function addListItem(e) {
    e.preventDefault();
    //addDiv();
    // Get the input element and its value
    const inputnew = document.getElementById("itemInput");
    const inputValue = inputnew.value;

    // Get the ul element by its id
    const ulbew = document.getElementById("myList");

    // Create a new li element
    const linew = document.createElement("li");
    // li.innerText = inputValue;
    ulbew.appendChild(linew);

    const newSpan = document.createElement("span");
    newSpan.className = "name";
    newSpan.textContent = inputValue;
    linew.appendChild(newSpan);

    const deleteSpan = document.createElement("span");
    deleteSpan.className = "delete";
    deleteSpan.textContent = "Delete";
    linew.appendChild(deleteSpan);

    // Clear the input field
    inputnew.value = "";
}

function addDiv() {
    const newDiv = document.createElement("div");
    newDiv.id = "wrapper";
    document.body.appendChild(newDiv);

    const newHeader = document.createElement("header");
    newDiv.appendChild(newHeader);

    const newPageBanner = document.createElement("div");
    newPageBanner.id = "page-banner";
    newHeader.appendChild(newPageBanner);

    const newTitle = document.createElement("h1");
    newTitle.className = "title";
    newTitle.innerText = "Item Lister";
    newPageBanner.appendChild(newTitle);

    const newSubTitle = document.createElement("p");
    newSubTitle.innerText = "Listahan ni Gaspy";
    newPageBanner.appendChild(newSubTitle);

    const newForm = document.createElement("form");
    newForm.id = "search-books";
    newPageBanner.appendChild(newForm);

    const newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("placeholder", "Type your search here...");
    newForm.appendChild(newInput);

    const newDivBookList = document.createElement("div");
    newDivBookList.className = "book-list";
    newDiv.appendChild(newDivBookList);

    const newH2Title = document.createElement("h2");
    newH2Title.className = "title";
    newH2Title.innerText = "The List of Items";
    newDivBookList.appendChild(newH2Title);


    // Create a new <ul> element
    const ulElement = document.createElement("ul");
    ulElement.id = "myList";
    // Loop to create 4 <li> elements
    for (let i = 0; i < 4; i++) {
        // Create a new <li> element
        const liElement = document.createElement("li");

        // Create the first <span> element with class "name"
        const nameSpan = document.createElement("span");
        nameSpan.className = "name";
        nameSpan.textContent = "Item " + (i + 1);

        // Create the second <span> element with class "delete"
        const deleteSpan = document.createElement("span");
        deleteSpan.className = "delete";
        deleteSpan.textContent = "Delete";

        // Append the <span> elements to the <li> element
        liElement.appendChild(nameSpan);
        liElement.appendChild(deleteSpan);

        // Append the <li> element to the <ul> element
        ulElement.appendChild(liElement);
    }

    // Append the <ul> element to the body of the HTML document
    newDivBookList.appendChild(ulElement);

    const formElement = document.createElement("form");
    formElement.id = "add-book";
    newDivBookList.appendChild(formElement);

    const inputElement = document.createElement("input");
    inputElement.id = "itemInput";
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("placeholder", "Add item...");
    formElement.appendChild(inputElement);

    const btnElement = document.createElement("button");
    btnElement.id = "search-button";
    btnElement.innerText = "Add";
    formElement.appendChild(btnElement);

}

