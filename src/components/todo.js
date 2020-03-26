import React from 'react';
import ButtonGroup from './buttongroup';
import ClearButton from './clearbtn'
import './todo.css';



class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: '',
            finished: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.taskFinish = this.taskFinish.bind(this);
    }

    render() {
        return (
            <div className='container mx-auto'>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                    <div className='col-8'>
                        <h1 className='text-center mb-1 mt-5'>To Do List</h1>
                        <ButtonGroup className='mb-3' />
                        <TodoList items={this.state.items} />
                        <form className='text-center my-4' onSubmit={this.handleSubmit}>
                            {/* <label htmlFor="new-todo">
                                Add a to do item.
                            </label> */}
                            <input
                                placeholder='Add to do item'
                                id="new-todo"
                                onChange={this.handleChange}
                                value={this.state.text}
                            />
                            <button>
                                Add #{this.state.items.length + 1}
                            </button>
                        </form>
                        <ClearButton parentFunction={this.clearAll.bind(this)} />
                    </div>
                </div>
                <div className='col-2'>
                </div>
            </div>
        );
    }



    //send new todo items to local storage
    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now(),
            finished: false
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }

    componentDidMount() {
        var newTodolist = JSON.parse(localStorage.getItem('newtodo')) || [];
        this.setState({
            items: newTodolist
        });
    }

    componentDidUpdate() {
        window.localStorage.setItem('newtodo', JSON.stringify(this.state.items));
    }

    clearAll() {
        this.setState({
            items: [],
        });
    }

    //have checkbox change state of finished from false to true on click
    //have X button delete the current item from the list on click

    taskFinish(e) {
        this.setState({
            finished: true,
        });
    }
}


class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.items.map(item => (
                    <div key={item.id} className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" onClick={console.log('i am finished')} aria-label="Checkbox for following text input" />
                            </div>
                        </div>
                        <input type="text" value={item.text} disabled className="form-control" aria-label="Text input with checkbox" />
                        <div className="input-group-append">
                            <span className="btn btn-danger">X</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}



export default TodoApp