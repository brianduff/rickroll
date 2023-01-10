import { consume } from "@lit-labs/context";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { studentContext } from "./context-defs";
import { Student } from "@backend-types/student";

@customElement('student-activities')
export class StudentActivities extends LitElement {
  @consume({ context: studentContext, subscribe: true })
  @property({attribute: false})
  student: Student | undefined

  render() {
    return html`<div>Activities for ${this.student?.name}</div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'student-activities': StudentActivities
  }
}