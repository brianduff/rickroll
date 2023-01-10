import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import '@material/web/button/filled-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/list/list-item-image.js';
import '@material/web/list/list-divider.js';
import '@material/web/icon/icon.js';

import './student-picker.ts';

@customElement('main-page')
export class MainPage extends LitElement {
  @property()
  version = 'STARTING';

  @property()
  message = "Click the button, please.";

  render() {
    return html`
    <style>
      @import url(//fonts.googleapis.com/css2?family=Material+Symbols+Outlined);
    </style> 
    <h1>Welcome to RickRoll!</h1>
    <student-picker></student-picker>
    `;
  }

  private clickButton(e: Event) {
    console.log("Button clicked")
    this.message = "You clicked! Whey hey!"
  }
}
