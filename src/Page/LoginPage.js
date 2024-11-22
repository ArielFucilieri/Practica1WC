class LoginPage extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
      this.shadowRoot.innerHTML = /*html*/ `
        <user-login></user-login>
        <alert-message></alert-message>
      `;
      this.addEventListener("login-result", this.handleLogin.bind(this));
    }
  
    handleLogin(event) {
      
      const { success, message } = event.detail;
  
      
      const alertMessage = this.shadowRoot.querySelector("alert-message");
  
      if (success) {
        alertMessage.updateAlert("success", message);
      } else {
        alertMessage.updateAlert("error", message);
      }
    }
  }
  
  customElements.define("login-page", LoginPage);