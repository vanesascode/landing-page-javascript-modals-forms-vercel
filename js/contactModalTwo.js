//*************************CONTACT*************************//


//STEP 1 --- Open the contact model by clicking the 'Contact us button' (and being able to close it: )

function openModalTwo() {
  const contactModalContainerTwo = document.getElementById("contactModalContainerTwo");
  contactModalContainerTwo.style.display = "block";
}

const contactModalButtonTwo = document.getElementById("contactButtonTwo");
contactModalButtonTwo.addEventListener("click", openModalTwo);

function closeContactModalTwo() {
  contactModalContainerTwo.style.display = "none";
}

//We could use the  'onclick'  attribute directly in HTML, which can be convenient for simple and straightforward interactions. However, using event listeners in JavaScript provides more flexibility and control over your code. It allows you to separate the HTML and JavaScript logic, making your code more organized and easier to maintain.

//STEP 2 --- select the contact form and the thank you modal:

const contactFormTwo = document.getElementById('form-contact-two');
const thanksModalContainerTwo = document.getElementById('thanks-modal-two');
const contactModalContainerTwo = document.getElementById("contactModalContainerTwo");


// //STEP 3: Attach the function 'closeContactOpenThanksTwo' to the 'contactFormTwo' event. This means that when the form is submitted, the 'closeContactOpenThanksTwo' function will be executed.

contactFormTwo.onsubmit = closeContactOpenThanksTwo;

// //STEP 3: Declare the function 'closeContactOpenThanksTwo'. It closes the contact modal and opens the thanks modal:

function closeContactOpenThanksTwo() {
  contactModalContainerTwo.style.display = "none";
  thanksModalContainerTwo.style.display = "block";
}

//WE can also close the thanks modal: 

function closeContactModalTwo() {
  thanksModalContainerTwo.style.display = "none";
}








