const EMAIL_ADDRESS = "mail@example.com";
const DEFAULT_SUBJECT = "Dedilse Inquiry";
let url = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(DEFAULT_SUBJECT)}`;

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("sendButton");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    let message = `${messageInput.value}
    
        Contact Information:
        ${nameInput.value}
        ${phoneInput.value}
        ${emailInput.value}`;
    url += `&body=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
});
