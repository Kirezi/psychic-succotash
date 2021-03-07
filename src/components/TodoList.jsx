import { observer } from 'mobx-react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { createTodoStore } from '../store/TodoStore';
import CompletedItem from './CompletedItem';
import InProgressItem from './InProgressItem';
import TodoListItem from './TodoListItem';

function TodoList({ className }) {
    const [ store ] = useState(createTodoStore);

    return (
        <div className={className}>
            <header>
                <h1 className="title">TODO List Example</h1>
            </header>
            <section>
                <ul>
                    {store.activeItems.map(item => (
                        <TodoListItem
                            key={item.id}
                            name={item.name}
                            isComplete={item.isComplete}
                            onComplete={() => store.setInProgress(item.id)}
                            onChange={(e) => store.setItemName(item.id, e.target.value)}
                        />
                    ))}
                </ul>
                <button onClick={store.addItem}>
                    Add New Item
                </button>
            </section>
            <footer>
                <h2>In Progress</h2>
                <ul>
                {store.inProgressItems.map(item =>(

          <InProgressItem key={item.id} item={item} onDelete={() => {store.deleteItem(item.id)}}/>
))}
                </ul>
                <h2 className="completedTitle">Completed Items</h2>
                <ul>
                    {store.completedItems.map(item =>  (

                        <CompletedItem key={item.id} item={item} onDelete={() => {store.deleteItem(item.id)}}/>
                    ))}
                </ul>

            </footer>
        </div>

    )
}


export default styled(observer(TodoList))`
    background-color: lightgray;
    padding:10px;

    .title {
        color: #3b82f5;
        text-align:center;
    };

    .completedTitle{
        margin-left:10px;
        background-color: white
    }

`
