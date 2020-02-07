import React, {Component} from 'react';
import { list } from '_postcss@7.0.26@postcss';

class UndoList extends Component {
    render() {
        const {list, deleteItem} = this.props;
        return ( 
        <div className = 'undo-list'>
            <div className = 'undo-list-title'>
                正在进行
            <div className = 'undo-list-count' data-test = 'count'>
                {list.length}
            </div>
            </div>
            <ul className = 'undo-list-content'>
                {
                    list.map((item, index) => {
                        return (
                        <li 
                        data-test = 'list-item' 
                        key = {`${index}`}
                        className = 'undo-list-item'>
                        {item}
                        <div 
                            data-test='delete-item' 
                            onClick = { () => deleteItem(index)}
                            className = 'undo-list-delete'>-</div>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
        )
    }
}


export default UndoList;