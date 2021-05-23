const template = document.createElement("template");
template.innerHTML = `
    <style>
    h3 {
      color: silver;
    }

    img {
        border-radius: 50%;
        width: 200px;
        height: auto;
    }
    </style>
    <div class="user-card">
        <img>
        <h3> </h3>
    </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }
}

window.customElements.define("user-card", UserCard);
