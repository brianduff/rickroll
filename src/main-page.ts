import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import '@material/web/button/filled-button.js';
import '@material/web/textfield/filled-text-field.js';

@customElement('main-page')
export class MainPage extends LitElement {
  @property()
  version = 'STARTING';

  render() {
    return html`
    Welcome to a simple Google Material 3 page!
    <md-filled-text-field label="Name"></md-filled-text-field>
    <md-filled-button label="Hello world"></md-filled-button>
    `;
  }
}
