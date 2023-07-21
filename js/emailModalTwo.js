
//*************************FORM*************************//

//STEP 1: select the form, and the modal with JS. Since we are getting the modal by the css tag, we need to specify too that we want all the elements all inside the modal too: 

let formTwo = document.getElementById('form-email-two');
let modalTwo = document.getElementById('email-form-modal-two');
// let modalElements = modal.querySelectorAll('*');

//STEP 2: Attach the function 'send' to the form submit event. This means that when the form is submitted, the "send" function will be executed. 
//The code is not written as  'form.onsubmit = send();'  because that would immediately invoke the  send  function and assign its return value to the onsubmit event.  

formTwo.onsubmit = sendTwo;

//STEP 3: Declare the function 'send'.
// It makes the Modal appear and calls the function callThankyouMessage()
//(we are not sending anywhere the email in here, because it is FormSubmit.co which is making it without any need of Javascript)

function sendTwo() {
  // event.preventDefault(); //The code "event.preventDefault();" is used to prevent the default behavior of an event. For example, when a form is submitted, the default action is to refresh the page or navigate to a new page. It is usually used, but in this case, if we added it, it wouldn't let the 'action' atribute  in the form section work and send the info to the tool endpoint (FormSubmit.co). 

  //We could put the text in the Modal from here, but we prefer to do it in the html/css:
  // modal.innerHTML = ` 
  //     <p>Thank you!</p>
  //     <button onClick="closeModal()">x</button>`;
  //The backtick (`) is a character used in JavaScript to define template literals. Template literals are a way to create strings that allow for multi-line text and string interpolation.  

  modalTwo.style.display = "block";
  //call the function sendemail
  callThankyouMessageTwo();
}

//STEP 4: Be able to close the modal: 

function closeModalTwo() {
  modalTwo.style.display = "none";
  modalTwo.innerHTML = "";
}
//STEP 5: Thank the user

function callThankyouMessageTwo() {
  formTwo.innerHTML = "Thank you! We'll contact you soon!"
  formTwo.style.fontWeight = "bold";
  formTwo.style.fontSize = "25px";
}

