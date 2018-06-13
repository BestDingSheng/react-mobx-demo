import React, {Component} from 'react';
import { render } from 'react-dom';
import {observable, action, computed,useStrict} from 'mobx';
import {observer} from 'mobx-react';



class Store {
  @observable todos = [{
    title: "todo标题",
    done: false,
  },{
    title: "已经完成 todo 的标题",
    done: true,
  }];

  @action changeTodoTitle({index,title}){
    this.todos[index].title = title
  }

  @computed get unfinishedTodos () {
    console.log(222)
    return  this.todos.filter((todo) => todo.done)
  }
}


@observer
class TodoBox extends Component  {

  render() {
    console.log('render');
    return (
      <div>
        <ul>
          { /* 把 unfinishedTodos 换成 todos，点击修改标题就会在控制台打印 "render".*/ }
          {this.props.store.unfinishedTodos.map(
            (todo,index) => <li key={index}>{todo.title}</li>
          )}
        </ul>
        <div>
          <input type="button" onClick={() => {

            this.props.store.changeTodoTitle({index:0,title:"修改后的todo标题"});
          }} value="修改标题"/>
        </div>
      </div>
    )
  }
}

const store = new Store();

render(
  <TodoBox store={store} />,
  document.getElementById('root')
);