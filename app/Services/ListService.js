import List from "../Models/List.js";
import Task from "../Models/Task.js";
import _store from "../store.js"

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

  create(newListData) {
    let newList = new List(newListData)
    _store.State.lists.push(newList)
    _store.saveState()
  }

  delete(listID) {
    let delConfirm = confirm("Are you sure you want to delete list?")
    if (delConfirm !== true) {
      return
    }
    else {
      _store.State.lists = _store.State.lists.filter(list => list.id != listID)
      _store.saveState()
    }
  }

  addTask(newTaskData, listID) {
    let list = _store.State.lists.find(list => list.id == listID)
    list.tasks.push(newTaskData)
    _store.saveState()
  }

  deleteTask(index, listID) {
    let delConfirm = confirm("Are you sure you want to delete task?")
    if (delConfirm !== true) {
      return
    }
    else {
      let list = _store.State.lists.find(list => list.id == listID)
      list.tasks.splice(index, 1)
      _store.saveState()
    }
  }
}

const SERVICE = new ListService();
export default SERVICE;
