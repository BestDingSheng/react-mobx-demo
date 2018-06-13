import { observable, action, computed} from 'mobx'

class TodoStore {
    @observable todos
    constructor() {
        this.todos = [1,2,3]
    }
    @computed get changeTodo () {
    	return  this.todos.filter((todo) => todo>1)
    }
}

export default new TodoStore()
