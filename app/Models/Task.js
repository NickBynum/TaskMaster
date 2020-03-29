
import { generateId } from "../utils.js"


export default class Task {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId()
  }

  getTemplate(taskId) {
    return /*html*/`
<dd>
  <div class="row">
    <div class="col-12">
      <input type="checkbox" class="bg-success">
      <i type="button" class="fa fa-trash-o text-danger ml-auto"
        onclick="app.listController.deleteTask('${taskId}','${this.id}')">
        <span>&times;</span>
      </i>
      <h5>${this.title}</h5>
</dd>
    `
  }
}