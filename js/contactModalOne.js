//*************************CONTACT*************************//


//STEP 1 --- Open the contact model by clicking the 'Contact us button' (and being able to close it )

//Get the Modal: 

const contactModalContainerOne = document.getElementById("contactModalContainerOne");

//Get the button that opens the Modal: 

const contactModalButtonOne = document.getElementById("contact-button-one");

//Tell the button what function is going to carry on: 

contactModalButtonOne.addEventListener("click", openModalOne);

//Define the action that the button is going to carry on (open the modal) when clicked: 

function openModalOne() {
  contactModalContainerOne.style.display = "block";
}

//Define the action that the button inside the Modal is going to carry on to close the Modal: 

function closeContactModalOne() {
  contactModalContainerOne.style.display = "none";
}

//The  'onclick'  attribute used directly in HTML, can be convenient for simple and straightforward interactions. However, using event listeners in JavaScript provides more flexibility and control over your code. It allows you to separate the HTML and JavaScript logic, making your code more organized and easier to maintain.



//STEP 2 --- Select the contact form and the thank you modal. 

const contactFormOne = document.getElementById('form-contact-one');
const thanksModalContainerOne = document.getElementById('thanks-modal-one');


// //STEP 3: Attach the function 'closeContactOpenThanksOne' to the 'contactFormOne' event. This means that when the form is submitted, the 'closeContactOpenThanksOne' function will be executed.


contactFormOne.onsubmit = closeContactOpenThanksOne;

// //STEP 3: Declare the function 'closeContactOpenThanksOne'. It closes the contact modal and opens the thanks modal:

function closeContactOpenThanksOne() {
  contactModalContainerOne.style.display = "none";
  thanksModalContainerOne.style.display = "block";
}

//WE can also close the thanks modal: 

function closeContactThanksModalOne() {
  thanksModalContainerOne.style.display = "none";
}








