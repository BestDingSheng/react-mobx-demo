import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import DevTools from 'mobx-react-devtools';

@inject('todoStore')
// @inject(store => ({ ...store.todoStore }))
@observer
export default class App extends React.Component{
	componentDidMount() {
		let data = this.props.todoStore.changeTodo;
		console.log(data)
	}

	render(){
		let todo  = this.props.todoStore.changeTodo
		return (
			todo.map(item=>{
				return <div key ={item}>{item}</div>	
			})
			)
	}
}