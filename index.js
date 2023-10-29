// Create a <div> element and append it to the body
const divElement = document.createElement("div");
document.body.appendChild(divElement);

// Change the id of the <div> element to "my-div"
divElement.id = "my-div";

// Set the text content of the <div> element to "Hello, World!"
divElement.textContent = "Hello, World!";

// Add the class "important" to the <div> element
divElement.classList.add("important");

// Remove the class "important" from the <div> element
divElement.classList.remove("important");

// Remove the <div> element from the DOM
divElement.remove();

// Create an <h1> element and set its text content to "Header"
const h1Element = document.createElement("h1");
h1Element.textContent = "Header";
document.body.appendChild(h1Element);

// Change the inner HTML of the <h1> element to "<em>Important</em> Header"
h1Element.innerHTML = "<em>Important</em> Header";

// Create a <ul> element with three <li> elements and append it to the <div>
const ulElement = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
  const liElement = document.createElement("li");
  liElement.textContent = i.toString();
  ulElement.appendChild(liElement);
}
divElement.appendChild(ulElement);

// Create an <h2> element with the text "Subheader" and add the class "sub-header"
const h2Element = document.createElement("h2");
h2Element.textContent = "Subheader";
h2Element.classList.add("sub-header");
document.body.appendChild(h2Element);

// Add the class "paragraph" to all the <p> elements
const pElements = document.getElementsByTagName("p");
for (const pElement of pElements) {
  pElement.classList.add("paragraph");
}

// Change the title of the page to "New Title"
document.title = "New Title";

// Set the attribute "data-info" with the value "123" on the first <p> element
const firstPElement = document.querySelector("p");
firstPElement.setAttribute("data-info", "123");

// Create a new <p> element with the text "This is a paragraph." and append it to the <div>
const pElement = document.createElement("p");
pElement.textContent = "This is a paragraph.";
divElement.appendChild(pElement);

// Set the text content of the last <li> element to "New Item"
const ulElement = document.querySelector("ul");
const lastLiElement = ulElement.lastElementChild;
lastLiElement.textContent = "New Item";

// Create an <a> element with the text "Visit Google" and set its href attribute to "https://www.google.com"
const aElement = document.createElement("a");
aElement.textContent = "Visit Google";
aElement.href = "https://www.google.com";
divElement.appendChild(aElement);

// Change the text content of the <ul> element to "List of Items"
ulElement.textContent = "List of Items";

// Create an <h3> element with the text "Third-Level Header" and append it to the body
const h3Element = document.createElement("h3");
h3Element.textContent = "Third-Level Header";
document.body.appendChild(h3Element);

// Set the text content of the second <li> element to "Second Item"
const secondLiElement = ulElement.children[1];
secondLiElement.textContent = "Second Item";

// Create a <table> element with two rows and two columns and append it to the body
const tableElement = document.createElement("table");
const tbodyElement = document.createElement("tbody");

for (let i = 0; i < 2; i++) {
  const rowElement = document.createElement("tr");

  for (let j = 0; j < 2; j++) {
    const cellElement = document.createElement("td");
    cellElement.textContent = "Cell " + (i * 2 + j + 1);
    rowElement.appendChild(cellElement);
  }

  tbodyElement.appendChild(rowElement);
}

tableElement.appendChild(tbodyElement);
document.body.appendChild(tableElement);