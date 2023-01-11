import { consume } from "@lit-labs/context";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Student } from "@backend-types/student";

@customElement('student-activities')
export class StudentActivities extends LitElement {
  student: Student | undefined

  constructor() {
    super()
    if (this.student === undefined) {
      let student = sessionStorage.getItem("currentStudent")
      if (student !== null) {
        this.student = JSON.parse(student)
      }
    }
  }

  render() {
    return html`<div>Activities for ${this.student?.name}</div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'student-activities': StudentActivities
  }
}