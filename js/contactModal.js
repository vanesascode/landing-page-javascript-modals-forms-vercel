//*************************CONTACT*************************//


//STEP 1 --- Open the model by clicking the 'Contact us button' (and being able to close it: )

function openModal() {
  const contactModalContainer = document.getElementById("contactModalContainer");
  contactModalContainer.style.display = "block";
}

const contactModalButton = document.getElementById("contactModalButton");
contactModalButton.addEventListener("click", openModal);

function closeModalTwo() {
  contactModalContainer.style.display = "none";
}

//We could use the  'onclick'  attribute directly in HTML, which can be convenient for simple and straightforward interactions. However, using event listeners in JavaScript provides more flexibility and control over your code. It allows you to separate the HTML and JavaScript logic, making your code more organized and easier to maintain.

//STEP 2 --- select elements from modal and form:

let formTwo = document.querySelector('.form-two');
let modalTwo = document.querySelector('.modal-two');


// //STEP 3: Attach the function 'closeFormTwo' to the form submit event. This means that when the form is submitted, the 'closeFormTwo' function will be executed.


formTwo.onsubmit = closeFormTwo;

// //STEP 3: Declare the function 'closeFormTwo'. It closes the modal:

function closeFormTwo() {
  modalTwo.style.display = "none";
}








