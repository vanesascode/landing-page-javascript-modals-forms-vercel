//*************************CONTACT*************************//


//STEP 1 --- Open the model by clicking the 'Contact us button' (and being able to close it: )

function openModalThree() {
  const contactModalContainerThree = document.getElementById("contactModalContainerThree");
  contactModalContainerThree.style.display = "block";
}

const contactModalLink = document.getElementById("contactModalLink");
contactModalLink.addEventListener("click", openModalThree);

function closeModalThree() {
  contactModalContainerThree.style.display = "none";
}

//We could use the  'onclick'  attribute directly in HTML, which can be convenient for simple and straightforward interactions. However, using event listeners in JavaScript provides more flexibility and control over your code. It allows you to separate the HTML and JavaScript logic, making your code more organized and easier to maintain.

//STEP 2 --- select elements from modal and form:

let formThree = document.querySelector('.form-three');
let modalThree = document.querySelector('.modal-three');


// //STEP 3: Attach the function 'closeFormTwo' to the form submit event. This means that when the form is submitted, the 'closeFormTwo' function will be executed.


formThree.onsubmit = closeFormThree;

// //STEP 3: Declare the function 'closeFormTwo'. It closes the modal:

function closeFormThree() {
  modalThree.style.display = "none";
}








