import { consume } from "@lit-labs/context";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Student } from "@backend-types/student";
import { routerContext } from "./context-defs";
import { Router } from "@lit-labs/router";

@customElement('student-activities')
export class StudentActivities extends LitElement {
  student?: Student

  @consume({ context: routerContext, subscribe: true })
  @property({ attribute: false })
  router?: Router;

  constructor() {
    super()
    let studentJson = sessionStorage.getItem("currentStudent")
    if (studentJson !== null) {
      this.student = JSON.parse(studentJson)
    } else {
      // No student selected - redirect back to the student picker
      // unfortunately the router goto didn't work, so we'll just
      // do a hard ridirect :(
      window.location.replace("/")
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