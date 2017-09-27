import React from 'react';
import {connect} from 'react-redux';

import {Todo} from '../components/Todo.jsx';

import {addTodo, setName, clearAll} from '../actions/AdditionActions.jsx';

class App extends React.Component {
    render() {
        {
            console.log('PROPS in render==>');
            console.log(this.props);
        }
        return (
            <div className="container">
                <Todo
                    usernameArr={this.props.username}
                    addUser={(e) => {
                    this
                        .props
                        .setName(e)
                    }}
                    addproperty={() => {
                    this
                        .props
                        .addToState({text: 'Name to state'})
                    }}
                    clearAll = {() => {
                        this.props.clearAll();
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToState: (name) => {
            dispatch(addTodo(name));
        },
        setName: (evt) => {
            dispatch(setName({text: document.querySelector('input').value}));
        },
        clearAll: () => {
            dispatch(clearAll());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
