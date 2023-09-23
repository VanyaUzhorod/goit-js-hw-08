
import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


form.addEventListener('input', throttle(saveFormData, 500));
form.addEventListener('submit', onSubmit);

function saveFormData() {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
function onSubmit(event) {
    event.preventDefault();

    const {email, message} = event.currentTarget.elements
    
   

    const formData = {
    email: email.value,
        message: message.value
    }

   console.log(formData);
   localStorage.removeItem("feedback-form-state");
   event.currentTarget.reset();
//    formData = {};
}



function dataLocalStorage(){
    const storedData = localStorage.getItem("feedback-form-state");
    if (storedData !== null) {
        const formData = JSON.parse(storedData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}
dataLocalStorage();