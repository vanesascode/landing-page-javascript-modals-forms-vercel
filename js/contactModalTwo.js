//*************************CONTACT*************************//


//STEP 1 --- Open the contact model by clicking the 'Contact us button' (and being able to close it )

//Get the Modal:

const contactModalContainerTwo = document.getElementById("contactModalContainerTwo");

//Get the button that opens the Modal: 

const contactModalButtonTwo = document.getElementById("contact-button-two");

//Tell the button what function is going to carry on: 

contactModalButtonTwo.addEventListener("click", openModalTwo);

//Define the action that the button is going to carry on (open the modal) when clicked: 

function openModalTwo() {
  contactModalContainerTwo.style.display = "block";
}

//Define the action that the button inside the Modal is going to carry on to close the Modal: 

function closeContactModalTwo() {
  contactModalContainerTwo.style.display = "none";
}

//The  'onclick'  attribute used directly in HTML, can be convenient for simple and straightforward interactions. However, using event listeners in JavaScript provides more flexibility and control over your code. It allows you to separate the HTML and JavaScript logic, making your code more organized and easier to maintain.

//STEP 2 --- select the contact form and the thank you modal:

const contactFormTwo = document.getElementById('form-contact-two');
const thanksModalContainerTwo = document.getElementById('thanks-modal-two');



// //STEP 3: Attach the function 'closeContactOpenThanksTwo' to the 'contactFormTwo' event. This means that when the form is submitted, the 'closeContactOpenThanksTwo' function will be executed.

contactFormTwo.onsubmit = closeContactOpenThanksTwo;

// //STEP 3: Declare the function 'closeContactOpenThanksTwo'. It closes the contact modal and opens the thanks modal:

function closeContactOpenThanksTwo() {
  contactModalContainerTwo.style.display = "none";
  thanksModalContainerTwo.style.display = "block";
}

//WE can also close the thanks modal: 

function closeContactThanksModalTwo() {
  thanksModalContainerTwo.style.display = "none";
}








