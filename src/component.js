export class Component extends HTMLElement {
  constructor() {
    super();
    this.eventListeners = [];
  }

  static convertCamelCaseToKebab(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  attachTemplate(template, style) {
    style = style ? '<style>' + style + '</style>' : '';

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = style + template;
  }

  _addEventListener(query, eventType, callback, isShadowRoot) {
    const root = isShadowRoot ? this.shadowRoot : this;

    const handler = event => {
      const { target } = event;
      const element = target.closest(query);
      if (!element) return;
      if (!root.contains(element)) return;
      callback = callback.bind(this);
      callback(event, element);
    };

    const eventListener = {
      type: eventType,
      handler,
      isShadowRoot,
    };

    this.eventListeners.push(eventListener);

    root.addEventListener(eventListener.type, eventListener.handler);
  }

  _removeEventListeners(isShadowRoot) {
    const root = isShadowRoot ? this.shadowRoot : this;

    this.eventListeners
      .filter(eventListener => eventListener.isShadowRoot === isShadowRoot)
      .map(eventListener =>
        root.removeEventListener(eventListener.type, eventListener.handler)
      );
  }

  addLightEventListener(query, eventType, callback) {
    this._addEventListener(query, eventType, callback, false);
  }

  removeLightEventListeners() {
    this._removeEventListeners(false);
  }

  addShadowEventListener(query, eventType, callback) {
    this._addEventListener(query, eventType, callback, true);
  }

  removeShadowEventListeners() {
    this._removeEventListeners(true);
  }

  bindPropertiesToAttributes(names) {
    names.map(name => {
      const attributeName = Component.convertCamelCaseToKebab(name);

      Object.defineProperty(this, name, {
        get: () => {
          const value = this.getAttribute(attributeName);
          return value === String(Number(value)) ? +value : value;
        },
        set: value =>
          value
            ? this.setAttribute(attributeName, value)
            : this.removeAttribute(attributeName),
      });
    });
  }
}
