import React from 'react';
import ButtonGroup from './buttongroup';
import ClearButton from './clearbtn'



class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.clearAll = this.clearAll.bind(this);

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
                        <ClearButton />
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
            id: Date.now()
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

    // clearAll(e) {
    //     e.preventDefault();
    //     window.localStorage.clear();
    // }
}


class TodoList extends React.Component {
    render() {
        return (
            <ul className='ml-5'>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}



export default TodoApp