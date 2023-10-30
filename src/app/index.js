
import '../styles/styles.scss';

import IMask from 'imask';

const body = document.getElementsByTagName('body')[0];
const element = document.getElementById('tel');
const buttonInfo = document.getElementById('button-info');
const buttonCloseInfo = document.getElementById('close-info');
const modal = document.getElementById('modal');

const maskOptions = {
    mask: '+{375} (000) 000-00-00',
    lazy: false,
    placeholderChar: '-'
};

const mask = IMask(element, maskOptions);

function addClass(elems, className) {
    elems.forEach(elem => elem.classList.add(className));
}

function removeClass(elems, className) {
    elems.forEach(elem => elem.classList.remove(className));
}

function showModal() {
    addClass([body], 'body-fixed');
    removeClass([modal], 'black-bg-hidden');
}

function closeModal() {
    removeClass([body], 'body-fixed');
    addClass([modal], 'black-bg-hidden');
}

buttonInfo.addEventListener('click', showModal);
buttonCloseInfo.addEventListener('click', closeModal);