import throttle from 'lodash.throttle';

const FORM_STOR_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const localStorageData = JSON.parse(localStorage.getItem(FORM_STOR_KEY));
let formData = localStorageData || {};

if (localStorageData) {
  formEl.elements.email.value = localStorageData.email;
  formEl.elements.message.value = localStorageData.message;
}

formEl.addEventListener('input', onFormChenge);
formEl.addEventListener('submit', onFormSubmit);

const localStorUpdate = throttle(() => {
  localStorage.setItem(FORM_STOR_KEY, JSON.stringify(formData));
}, 500);

function onFormChenge(e) {
  formData[e.target.name] = e.target.value;
  localStorUpdate();
}

function onFormSubmit(e) {
  e.preventDefault();
  if (
    !e.currentTarget.elements.email.value ||
    !e.currentTarget.elements.message.value
  ) {
    alert('Заполните все поля');
    return;
  }
  e.currentTarget.reset();
  localStorage.removeItem(FORM_STOR_KEY);
  console.log(formData);
  formData = {};
}
