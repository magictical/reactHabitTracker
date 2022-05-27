import React, { Component } from "react";

class HabitAddForm extends Component {
    // 리액트 요소에 접근하기 위해서 React.createRef생성 공식 API 읽어 볼것
    inputRef = React.createRef();
    addHabit = (event) => {
        event.preventDefault();
        console.log(this.inputRef.current.value);
        this.props.OnAdd(this.inputRef.current.value);
        this.inputRef.current.value = "";
    };
    render() {
        return (
            <form className="add-form" onSubmit={this.addHabit}>
                <input
                    ref={this.inputRef}
                    type="text"
                    className="add-input"
                    placeholder="Habit"
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
