const template = document.createElement("template");
template.innerHTML = `
    <style>
    .user-card {
       background: #eee;
      color: black;
      width: 500px;
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 10px;
      padding: 20px;
      margin: 20px;
      border: 2px solid dodgerblue;
      border-radius: 20px;
    }

    .user-card img {
        border-radius: 50%;
        width: 200px;
        height: auto;
        border: 2px solid dodgerblue;
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
            <p>JOB</p>
            <p>EMAIL</p>
        </div>
        <button id="toggle-info">Hide Info</button>
        </div>
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
