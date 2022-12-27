import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import '@material/web/button/filled-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/icon/icon.js';

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
    <span class="material-symbols-outlined">search</span>
    Welcome to a simple Google Material 3 page! ${this.message}
    <!-- <md-icon
                    layout-align="center center"
                    class="material-icons-outlined tf-testresult-item-sidebaricon"
                  ></md-icon> -->
    <md-filled-text-field label="Name"></md-filled-text-field>
    <md-filled-button @click="${this.clickButton}" label="Hello world"></md-filled-button>
    <md-list>
      <md-list-item class="md3-list-item--with-one-line" headline="Caitlin">
        <span slot="start"><b>Something</b></span>
      </md-list-item>
      <md-list-item class="md-3-line" headline="Michael"></md-list-item> 
    </md-list>
    `;
  }

  private clickButton(e: Event) {
    console.log("Button clicked")
    this.message = "You clicked! Whey hey!"
  }
}
