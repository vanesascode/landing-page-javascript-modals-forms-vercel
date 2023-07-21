//*************************CONTACT*************************//


//STEP 1 --- Open the contact model by clicking the 'Contact us button' (and being able to close it: )

function openModalOne() {
  const contactModalContainerOne = document.getElementById("contactModalContainerOne");
  contactModalContainerOne.style.display = "block";
}

const contactModalButtonOne = document.getElementById("contactButtonOne");
contactModalButtonOne.addEventListener("click", openModalOne);

// function closeContactModalOne() {
//   contactModalContainerOne.style.display = "none";
// }

//We could use the  'onclick'  attribute directly in HTML, which can be convenient for simple and straightforward interactions. However, using event listeners in JavaScript provides more flexibility and control over your code. It allows you to separate the HTML and JavaScript logic, making your code more organized and easier to maintain.

//STEP 2 --- select the contact form and the thank you modal. Also the contact modal again, since before it was inside the scope of another function:

const contactFormOne = document.getElementById('form-contact-one');
const thanksModalContainerOne = document.getElementById('thanks-modal-one');
const contactModalContainerOne = document.getElementById("contactModalContainerOne");

// //STEP 3: Attach the function 'closeContactOpenThanksOne' to the 'contactFormOne' event. This means that when the form is submitted, the 'closeContactOpenThanksOne' function will be executed.


contactFormOne.onsubmit = closeContactOpenThanksOne;

// //STEP 3: Declare the function 'closeContactOpenThanksOne'. It closes the contact modal and opens the thanks modal:

function closeContactOpenThanksOne() {
  contactModalContainerOne.style.display = "none";
  thanksModalContainerOne.style.display = "block";
}

//WE can also close the thanks modal: 

function closeContactModalOne() {
  thanksModalContainerOne.style.display = "none";
}








