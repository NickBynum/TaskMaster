import List from "../Models/List.js";
import Task from "../Models/Task.js";
import _store from "../store.js"

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

  addTask(newTaskData){
    let newTask = new Task(newTaskData)
  let list = _store.State.lists.find(list => list.id == list)
  list.tasks.push(newTask)
  _store.saveState()
}
  create(newListData) {
    let newList = new List(newListData)
    _store.State.lists.push(newList)
    _store.saveState()
  }

  delete(listID) {
    console.log(_store.State.lists);
    
    _store.State.lists = _store.State.lists.filter(list => list.id != listID)
    _store.saveState()
  }
}

const SERVICE = new ListService();
export default SERVICE;
