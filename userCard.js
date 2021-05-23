const template = document.createElement("template");
template.innerHTML = `
    <style>
    .user-card {
        font-family: sans;
                line-height: 14px;

       background: #eee;
      color: black;
      width: 500px;
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 10px;
      padding: 20px;
      margin: 20px;
      border: 5px solid silver;
      border-radius: 20px;
    }

    .user-card img {
        border-radius: 50%;
        width: 200px;
        height: auto;
        border: 3px solid dodgerblue;
    }

    .user-card button {
        cursor: pointer;
        border: 0;
        background-color: dodgerblue;
        color: white;
        border-radius: 10px;
    }
    </style>

    <div class="user-card">
        <img>
        <div>
        <h3> </h3>
        <div class="info">
            <p><slot name="age"/></p>
            <p><slot name="job"/></p>
            <p><slot name="email"/></p>
        </div>
        <button id="toggle-info">Hide Info</button>
        </div>
    </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
    const info = this.shadowRoot.querySelector(".info");
    const btn = this.shadowRoot.querySelector("#toggle-info");
    if (this.showInfo) {
      info.style.display = "block";
      btn.innerText = "Hide Info";
    } else {
      info.style.display = "none";
      btn.innerText = "Show Info";
    }
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#toggle-info")
      .addEventListener("click", () => {
        this.toggleInfo();
      });
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("#toggle-info").removeEventListener();
  }
}

window.customElements.define("user-card", UserCard);
