import './index.css';
import './emails-input';

const emailsInput = document.querySelector('emails-input');
function onEmailsCount() {
  emailsInput.dispatchEvent(new Event('count'));
}

function onAddEmail() {
  emailsInput.dispatchEvent(new Event('add'));
}

document.getElementById('add-email').onclick = onAddEmail;
document.getElementById('emails-count').onclick = onEmailsCount;
