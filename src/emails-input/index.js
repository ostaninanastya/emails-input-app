import { Component } from '../component';
import { EMAIL_RE, generateEmail } from './email-utils';
import template from './index.html';
import style from './style.css';

const KEYCODE = {
  ENTER: 13,
  COMMA: 188,
};

class EmailsInput extends Component {
  static getValidClassname(email) {
    return EMAIL_RE.test(email)
      ? 'emails-input__item--valid'
      : 'emails-input__item--invalid';
  }

  constructor() {
    super();
    this.attachTemplate(template, style);
    this.bindPropertiesToAttributes(['items']);

    this.previosKeyCodeValid = true;
    this._items = [];

    this.addShadowEventListener(
      '.emails-input__item-cross',
      'click',
      this.handleClickCrossEvent
    );
    this.addShadowEventListener(
      '.emails-input__add-more-input',
      'keyup',
      this.handleAddItemEvent
    );
    this.addShadowEventListener(
      '.emails-input__add-more-input',
      'focusout',
      this.handleAddItemEvent
    );

    this.addLightEventListener('emails-input', 'count', () => {
      alert(`Valid emails count: ${this.getValidEmailsCount()}`);
    });

    this.addLightEventListener('emails-input', 'add', () => {
      this.addNewEmail();
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'items') {
      this._items = [];

      if (newValue) {
        newValue.split(',').forEach(item => {
          this._items.push({ id: this.generateId(), label: item });
        });
      }

      this.renderEmailsList();
    }
  }

  static get observedAttributes() {
    return ['items'];
  }

  connectedCallback() {
    this.renderEmailsList();
  }

  disconnectedCallback() {
    this.removeShadowEventListeners();
    this.removeLightEventListeners();
  }

  get emailsList() {
    return this.shadowRoot.getElementById('items');
  }

  set items(value) {
    this._items = value;
  }

  get items() {
    return this._items;
  }

  getValidEmailsCount() {
    return this._items.filter(item => EMAIL_RE.test(item.label)).length;
  }

  generateId() {
    let num = Math.floor(Math.random() * (1000 - 1)) + 1;
    if (this._items.map(item => item.id).includes(num)) {
      this.generateId();
    }
    return num;
  }

  addNewEmail(value = generateEmail()) {
    if (value) {
      this._items.push({ id: this.generateId(), label: value });
      this.setAttribute(
        'items',
        this._items.map(item => item.label).toString()
      );

      this.dispatchEvent(
        new CustomEvent('change', {
          bubbles: true,
          detail: { value, text: `New email ${value} was added.` },
        })
      );
    }
  }

  handleAddItemEvent(event) {
    event.preventDefault();
    let newEmail = this.shadowRoot.getElementById('add-more-input').value;

    if (event.keyCode === KEYCODE.ENTER) {
      this.previosKeyCodeValid = true;
      this.addNewEmail(newEmail);
    }

    if (event.keyCode === KEYCODE.COMMA && event.key === ',') {
      this.previosKeyCodeValid = true;
      newEmail = newEmail.substring(0, newEmail.length - 1);
      this.addNewEmail(newEmail);
    }

    if (event.type === 'focusout' && newEmail && !this.previosKeyCodeValid) {
      this.addNewEmail(newEmail);
    }

    this.previosKeyCodeValid = false;
  }

  handleClickCrossEvent(event, element) {
    const emailId = element.parentElement.getAttribute('data-value');
    this.removeEmail(emailId);
  }

  removeEmail(id) {
    const email = this._items.find(email => email.id === Number(id)).label;
    this._items = this._items.filter(email => email.id !== Number(id));
    this.setAttribute('items', this._items.map(item => item.label).toString());

    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        detail: { email, text: `Email ${email} was removed.` },
      })
    );
  }

  renderEmptyList() {
    while (this.emailsList.hasChildNodes()) {
      this.emailsList.removeChild(this.emailsList.lastChild);
    }
  }

  renderEmailsList() {
    this.renderEmptyList();

    this._items.forEach(email => {
      const text = document.createElement('div');
      text.className = 'emails-input__item-text';
      text.innerText = email.label;

      const cross = document.createElement('span');
      cross.innerHTML = '<span>&times;</span>';
      cross.className = 'emails-input__item-cross';

      const element = document.createElement('div');
      element.setAttribute('data-value', email.id);
      element.classList.add(
        'emails-input__item',
        EmailsInput.getValidClassname(email.label)
      );
      element.appendChild(text);
      element.appendChild(cross);

      this.emailsList.appendChild(element);
    });

    const inputField = document.createElement('input');
    inputField.id = 'add-more-input';
    inputField.placeholder = 'add more people…';
    inputField.className = 'emails-input__add-more-input';

    this.emailsList.appendChild(inputField);
    this.shadowRoot.getElementById('add-more-input').focus();
  }
}

window.customElements.define('emails-input', EmailsInput);
