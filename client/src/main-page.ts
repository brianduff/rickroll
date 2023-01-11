import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import '@material/web/button/filled-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/list/list-item-image.js';
import '@material/web/list/list-divider.js';
import '@material/web/icon/icon.js';

import './student-picker';
import { Router } from '@lit-labs/router';
import { createContext, provide } from '@lit-labs/context';
import { routerContext } from './context-defs';
import { Student } from '@backend-types/student';

import './student-activities';


@customElement('main-page')
export class MainPage extends LitElement {
  @property()
  version = 'STARTING';

  @provide({context: routerContext })
  @property({attribute: false})
  public router = new Router(this, [
    {path: '/', render: this.renderStudentPicker },
    {path: '/activities', render: () => html`<student-activities></student-activities>`}
  ]);

  constructor() {
    super()
    this.addEventListener("pick", this.studentPicked)
  }

  studentPicked(event: Event) {
    const student = (event as CustomEvent<Student>).detail;
    sessionStorage.setItem("currentStudent", JSON.stringify(student))
    this.router.goto('/activities');
    history.pushState({}, '', '/activities');
  }

  renderStudentPicker() {
    return html`
        <student-picker></student-picker>
    `
  }

  render() {
    return html`
    <!-- <style>
      @import url(//fonts.googleapis.com/css2?family=Material+Symbols+Outlined);
    </style>  -->
    <h1>RickRoll</h1>
    ${this.router.outlet()}
    `;
  }

}
