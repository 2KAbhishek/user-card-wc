class UserCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h2>Abhishek</h2>`;
  }
}

window.customElements.define("user-card", UserCard);
