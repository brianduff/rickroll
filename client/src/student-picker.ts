import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/list/list-item-image.js';
import '@material/web/list/list-divider.js';

import { Student } from './student';

@customElement('student-picker')
export class StudentPicker extends LitElement {
  @property()
  students: Student[] = [
    {
      name: "Caitlin",
      imageUrl: "https://storage.googleapis.com/discobubble-quiz/IMG_2071.jpg",
    },
    {
      name: "Michael",
      imageUrl: "https://storage.googleapis.com/discobubble-quiz/IMG_2071.jpg",
    }
  ];

  render() {
    return html`
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