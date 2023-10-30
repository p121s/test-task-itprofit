const inpName = document.getElementById('name');
const inpEmail = document.getElementById('email');
const inpTel = document.getElementById('tel');
const inpText = document.getElementById('text');

export function validateName() {
    return inpName.value === '' ? 'error' : 'valid';
}

export function validateEmail() {
    const ex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    return ex.test(inpEmail.value) ? 'valid' : 'error';
}

export function validateTel() {
    const ex = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d[- .]?\d\d$/;
    return ex.test(inpTel.value) ? 'valid' : 'error';
}

export function validateText() {
    return inpText.value.length < 5 ? 'error' : 'valid';
}