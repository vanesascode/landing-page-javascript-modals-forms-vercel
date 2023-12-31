
//*************************FORM*************************//

//STEP 1: select the form, and the modal with JS.  

let form = document.getElementById('form-email-one');
let modal = document.getElementById('email-form-modal-one');


//STEP 2: Attach the function 'send' to the form submit event. This means that when the form is submitted, the "send" function will be executed. 
//The code is not written as  'form.onsubmit = send();'  because that would immediately invoke the  send  function and assign its return value to the onsubmit event.  

form.onsubmit = send;

//STEP 3: Declare the function 'send'.
// It makes the Modal appear and calls the function callThankyouMessage()
//(we are not sending anywhere the email in here, because it is FormSubmit.co which is making it without any need of Javascript)

function send() {
  // event.preventDefault(); //The code "event.preventDefault();" is used to prevent the default behavior of an event. For example, when a form is submitted, the default action is to refresh the page or navigate to a new page. It is usually used, but in this case, if we added it, it wouldn't let the 'action' atribute  in the form section work and send the info to the tool endpoint (FormSubmit.co). 

  //We could put the text in the Modal from here, but we prefer to do it in the html/css:
  // modal.innerHTML = ` 
  //     <p>Thank you!</p>
  //     <button onClick="closeModal()">x</button>`;
  //The backtick (`) is a character used in JavaScript to define template literals. Template literals are a way to create strings that allow for multi-line text and string interpolation.  

  modal.style.display = "block";
  //call the function sendemail
  callThankyouMessage();
}

//STEP 4: Be able to close the modal: 

function closeModal() {
  modal.style.display = "none";
  modal.innerHTML = "";
}
//STEP 5: Thank the user

function callThankyouMessage() {
  form.innerHTML = "Thank you! We'll contact you soon!"
  form.style.fontWeight = "bold";
  form.style.fontSize = "25px";
}

