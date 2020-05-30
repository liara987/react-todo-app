import React, { Component } from 'react';

class AddForm extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div>
                <div class="row">
                    <form class="col s12" onSubmit={this.handleSubmit}>
                        <div class="row">
                            <div class="input-field col s12">
                                    <label for="add_todo">Add todo:</label>                                                     
                                <input placeholder="Type a todo" id="add_todo" type="text" class="validate" onChange={this.handleChange} value={this.state.content}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}

export default AddForm;