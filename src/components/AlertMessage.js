class AlertMessage extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
      this.shadowRoot.innerHTML = /*html*/ `
        <style>
          .alert {
            padding: 10px;
            border: 1px solid transparent;
            border-radius: 5px;
            margin-top: 10px;
          }
          .success {
            color: #155724;
            background-color: #d4edda;
            border-color: #c3e6cb;
          }
          .error {
            color: #721c24;
            background-color: #f8d7da;
            border-color: #f5c6cb;
          }
        </style>
  
        <div id="alert" class="alert" style="display: none;"></div>
      `;
    }
  
    
    updateAlert(type, message) {
      const alertDiv = this.shadowRoot.getElementById("alert");
      alertDiv.className = `alert ${type}`;
      alertDiv.textContent = message;
      alertDiv.style.display = "block";
    }
  
    clearAlert() {
      const alertDiv = this.shadowRoot.getElementById("alert");
      alertDiv.style.display = "none";
    }
  }
  
  customElements.define("alert-message", AlertMessage);