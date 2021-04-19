import React from 'react'
import './app.css'
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

export default class App extends React.Component {
  constructor() {
    super();
    
    this.maxId = 1;
    this.createTodoItem = (label) => {
      return {
        label,
        done: false,
        important: false,
        id: this.maxId++,
      }
    } 

    this.state = {
      todoData: [
        this.createTodoItem('Drink Tea'),
        this.createTodoItem('Tea'),
        this.createTodoItem('Tea'),
      ],
      term: '',
      showDoneItems: true,
      showActiveItems: true,
      
    };
    
    this.deleteItem = (id) => {
      this.setState((state) => {
        const itemIndex = state.todoData.findIndex((element) => element.id === id);
        //! НЕЛЬЗЯ изменять state на прямую. Код ниже неправильный
        //state.todoData.splice(itemIndex, 1);

        const newArray = [
          ...state.todoData.slice(0, itemIndex),
          ...state.todoData.slice(itemIndex + 1)];

        return {
          todoData: newArray
        }
      })
    };
    
    this.addItem = (text) => {
      //generate id?
      const newItem = this.createTodoItem(text);

      //add item to state?
      this.setState(({ todoData }) => {
        const newArray = [
          ...todoData,
          newItem
        ];

        return {
          todoData: newArray
        }
      })
    };

    this.toggleProperty = (arr, id, propName) => {
      const itemIndex = arr.findIndex((element) => element.id === id);

      const oldItem = arr[itemIndex];
      const newItem = { ...oldItem, [propName]: !oldItem[propName] };

      return [
        ...arr.slice(0, itemIndex),
        newItem,
        ...arr.slice(itemIndex + 1)
      ];
    }

    this.onToggleImportant = (id) => {
      this.setState(({ todoData }) => {        
        return {
          todoData: this.toggleProperty(todoData, id, 'important')
        }
      })
    }

    this.onToggleDone = (id) => {
      this.setState(({ todoData }) => {        
        return {
          todoData: this.toggleProperty(todoData, id, 'done')
        }
      })
    };

    this.onSearchPanelChange = (term) => {
      this.setState({ term })
    }
    
    this.search = (items, term) => {
      if (term.length === 0) {
        return items;
      }
      return items.filter((item) => {
        return item.label.indexOf(term) > -1;
      })
    }
    this.onToggleFilter = (done, active) => {
      this.setState({showDoneItems: done, showActiveItems: active})
    }
    this.filterItems = (items, done, active) => {
      if (done && active) {
        return items;
      }
      if (active) {
        return items.filter((item) => item.done === false)
      } else{
        return items.filter((item) => item.done === true)
      }      
    }
  }
  
  render() {
    const { todoData, term, showDoneItems, showActiveItems } = this.state;
    
    let visibleItems = this.search(todoData, term);
    visibleItems = this.filterItems(todoData, showDoneItems, showActiveItems);
  
    const doneItemsCount = todoData.filter((el) => el.done).length;
    const todoItemsCount = todoData.length - doneItemsCount;

    return (
      <div className="todo-app">
        <AppHeader
          toDo={todoItemsCount}
          done={doneItemsCount}
        />

        <div className="top-panel d-flex">
          <SearchPanel
            onSearchPanelChange={ this.onSearchPanelChange }
          />
          <ItemStatusFilter
            onToggleFilter={this.onToggleFilter}  
          />
        </div>
  
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />        
        <AddItem
          onAdded={this.addItem}
        />
        
      </div>
    )
  }   
}