import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title
    this.id = data.id || generateId();
    this.tasks = []
    // this.completed = data.completed
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {
    return /*html*/ `
<div class="col-12 col-md-3 d-flex justify-content-around my-3">
  <div class="row w-100 text-center bg-primary text-light py-1">
    <span class="col-10">${this.title}</span>
    <i type="button" class="col-2 fa fa-times text-danger text-right align-self-center"
      onclick="app.listController.delete('${this.id}')">
    </i>
    <div class="col-12">
      <div class="card-body bg-light text-secondary">Sample Task
        <!--used or adding task which does not have functionality yet -->
          <form onsubmit="app.listController.addTask(event)" class="input-group">
            <input name="taskName" placeholder="Enter New Task..." type="text" class="form-control" aria-label="Small"
              aria-describedby="inputGroup-sizing-sm">
            <button type="submit" class="border-0 bg-light"><i class="fa fa-plus text-success text-left align-self-center"></i></button>
          </form> 
        </div>
      </div>
    </div>
  </div>
    `
  }

}
