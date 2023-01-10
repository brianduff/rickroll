import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/list/list-item-image.js';
import '@material/web/list/list-divider.js';

import { Student } from './student';

async function fetchJson(url: string) {
  return fetch(url).then(res => res.json())
}

@customElement('student-picker')
export class StudentPicker extends LitElement {
  @property()
  students: Student[] = []

  connectedCallback() {
    super.connectedCallback()
    fetchJson('http://localhost:3000/students').then(data => {
      this.students = data
    })
  }

  render() {
    return html`
      <div>Choose a player</div>
      <md-list>
        <md-list-divider></md-list-divider>
        ${this.students.map((student) => html`
          <md-list-item headline=${student.name}>
            <md-list-item-image slot="start" image=${student.imageUrl}></md-list-item-image>
          </md-list-item>
          <md-list-divider></md-list-divider>
        `)}
      </md-list>
    `
  }
}