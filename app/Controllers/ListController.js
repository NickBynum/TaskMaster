import _listService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ''

  let lists = _store.State.lists


  lists.forEach(list => (template += list.Template))

  document.getElementById("lists").innerHTML = template
}



//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  create(event) {
    event.preventDefault()
    let formData = event.target
    console.log(formData)
    let newList = {
      title: formData.listName.value
    }
    _listService.create(newList)
    _drawLists()
    formData.reset()
  }

  delete(listID) {
    console.log(listID);
    
    _listService.delete(listID)
    _drawLists()
  }

  addTask(event, listID) {
    event.preventDefault()
    let formData = event.target
    let newTaskData = formData.taskName.value
    _listService.addTask(newTaskData, listID)
    formData.reset()
      _drawLists()
  }

  deleteTask(index, listID){
    _listService.deleteTask(index, listID)
    _drawLists()
  }
}

