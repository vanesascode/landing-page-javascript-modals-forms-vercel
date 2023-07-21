//*************************ABOUT MODAL*************************//


//1 - Get the Modal: 

const aboutModalContainer = document.getElementById("about-modal-container");

//2 - Get the button that opens the Modal: 

const aboutModalButton = document.getElementById("about-modal-button");

//3 - Tell the button what function is going to carry on and how: 

aboutModalButton.addEventListener("click", openAboutModal);

//4 - Define the action that the button is going to carry on (open the modal) when clicked: 

function openAboutModal() {
  aboutModalContainer.style.display = "block";
}

//5 - Define the action that the button inside the Modal is going to carry on to close the Modal: 

function closeAboutModal() {
  aboutModalContainer.style.display = "none";
}


//We can use the  'onclick'  attribute directly in HTML, which can be convenient for simple and straightforward interactions. However, using event listeners in JavaScript provides more flexibility and control over your code. It allows you to separate the HTML and JavaScript logic, making your code more organized and easier to maintain.










