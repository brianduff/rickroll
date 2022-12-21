var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/web/button/filled-button.js';
import '@material/web/textfield/filled-text-field.js';
let MainPage = class MainPage extends LitElement {
    constructor() {
        super(...arguments);
        this.version = 'STARTING';
        this.message = "Click the button, please.";
    }
    render() {
        return html `
    Welcome to a simple Google Material 3 page! ${this.message}
    <md-filled-text-field label="Name"></md-filled-text-field>
    <md-filled-button @click="${this.clickButton}" label="Hello world"></md-filled-button>
    `;
    }
    clickButton(e) {
        console.log("Button clicked");
        this.message = "You clicked! Whey hey!";
    }
};
__decorate([
    property()
], MainPage.prototype, "version", void 0);
__decorate([
    property()
], MainPage.prototype, "message", void 0);
MainPage = __decorate([
    customElement('main-page')
], MainPage);
export { MainPage };
//# sourceMappingURL=main-page.js.map