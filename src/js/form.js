const form = document.querySelector('.contact-form');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userCompany = document.getElementById('company');
const userText = document.getElementById('subject');
const messages = document.querySelectorAll('.message');


const error = (input, message) => {
    input.nextElementSibling.classList.add('error');
    input.nextElementSibling.textContent = message;
}
const success = (input) => {
    input.nextElementSibling.classList.remove('error');
}

const checking = (inputArr) => {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            error(input, `${input.id} és obligatori.`)
        }
    })
}
const checkLength = (input, min) => {
    if (input.value.trim().length < min) {
        error(input, `${input.id} ha de ser almenys de ${min} caràcters.`)
    } else {
        success(input)
    }
};

form.addEventListener('submit', e => {

    checking([userName, userEmail, userCompany, userText]);
    checkLength(userName, 2);
    checkLength(userEmail, 10);
    checkLength(userText, 10);

    const notValid = Array.from(messages).find((message) => {
        return message.classList.contains('error');
    })

    notValid && e.preventDefault();
})