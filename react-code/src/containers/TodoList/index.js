import React, { Component} from 'react';
import Header from './components/Header';
import { threadId } from 'worker_threads';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.addUndoItem = this.addUndoItem.bind(this);
        this.state = {
            undoList: []
        }
    }
    addUndoItem(value){
        this.setState({
           undoList: [ ...this.state.undoList, value]
        })
    }
    render(){
        return (
        <div>
            <Header addUndoItem = {this.addUndoItem}/>
            {
                this.state.undoList.map(item => {
                    return <div>{item}</div>
                })
            }
        </div>
        )
    }
}

export default TodoList;