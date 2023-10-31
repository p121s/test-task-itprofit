const inpName = document.getElementById('name');
const inpEmail = document.getElementById('email');
const inpTel = document.getElementById('tel');
const inpText = document.getElementById('text');

const nameError = document.createElement('p');
nameError.style.cssText = ``;
nameError.innerText = "*Поле обязательное для заполнения";

const emailError = document.createElement('p');


const telError = document.createElement('p');
telError.innerText = "*Введите корректный номер телефона";

const textError = document.createElement('p');
textError.innerText = "*Поле обязательное для заполнения";

export let validInput = {
    name: 'start',
    email: 'start',
    tel: 'start',
    text: 'start',
}

function validateName(data) {
    return data.length < 2 ? 'error' : 'valid';
}

function validateEmail(data) {
    const ex = /^[a-z0-9._%+-]+@[a-z0-9-]+.+.[a-z]{2,4}$/i;
    return ex.test(data) ? 'valid' : 'error';
}

function validateTel(data) {
    const ex = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d[- .]?\d\d$/;
    return ex.test(data) ? 'valid' : 'error';
}

function validateText(data) {
    return data.length < 5 ? 'error' : 'valid';
}

export function validateForm() {
    const name = validateName(inpName.value);
    const email = validateEmail(inpEmail.value);
    const tel = validateTel(inpTel.value);
    const text = validateText(inpText.value);

    console.log(name, email, tel, text);

    validInput =  {
        name,
        email,
        tel,
        text,
    }
}

export function getError(e) {
    e.preventDefault();
    validateForm();
    validInput.name === 'error' ? (inpName.classList.add(validInput.name), inpName.after(nameError)) : (inpName.classList.remove('error'), nameError.remove());
    emailError.innerText = inpEmail.value ? "Введите корректный email" : "*Поле обязательное для заполнения";
    validInput.email === 'error' ? (inpEmail.classList.add(validInput.email), inpEmail.after(emailError)) : (inpEmail.classList.remove('error'), emailError.remove());
    validInput.tel === 'error' ? (inpTel.classList.add(validInput.tel), inpTel.after(telError)) : (inpTel.classList.remove('error'), telError.remove());
    validInput.text === 'error' ? (inpText.classList.add(validInput.text), inpText.after(textError)) : (inpText.classList.remove('error'), textError.remove());
}