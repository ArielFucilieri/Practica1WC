class UserLogin extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = /*html*/ `
      <style>
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 300px;
        margin: 20px auto;
        background-color: #fff;
      }

      label {
        display: block;
        margin-bottom: 15px;
        font-size: 14px;
        font-weight: bold;
        color: #333;
      }

      input {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 14px;
        outline: none;
        transition: border-color 0.3s ease;
      }

      input:focus {
        border-color: #007bff;
        box-shadow: 0 0 3px #007bff;
      }

      button {
        padding: 10px 15px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      button:hover {
        background-color: #0056b3;
      }

      button:active {
        background-color: #004080;
      }
    </style>
  
        <label>
          Usuario:
          <input type="text" name="username" required />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" required />
        </label>
        <button id="bton" type="submit">Iniciar Sesión</button>
      `;
  
      this.shadowRoot
        .getElementById("bton")
        .addEventListener("click", this.submitForm.bind(this));
    }
  
    submitForm(event) {
      event.preventDefault();
  
      const username = this.shadowRoot.querySelector('input[name="username"]').value;
      const password = this.shadowRoot.querySelector('input[name="password"]').value;
  
      const success = username === "admin" && password === "1234";
      const message = success
        ? "Inicio de sesión exitoso"
        : "Usuario o contraseña incorrectos";
  
      this.dispatchEvent(
        new CustomEvent("login-result", {
          detail: { success, message },
          bubbles: true,
          composed: true,
        })
      );
    }
  }
  
  customElements.define("user-login", UserLogin);