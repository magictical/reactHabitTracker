import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
    // 리액트 요소에 접근하기 위해서 React.createRef생성 공식 API 읽어 볼것
    formRef = React.createRef();
    inputRef = React.createRef();

    addHabit = (event) => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        // this.inputRef.current.value = "";
        // 동일결과 정석인데 설정할게 더 많은 느낌 1줄vs3줄..
        this.formRef.current.reset();
    };
    render() {
        return (
            <form
                ref={this.formRef}
                className="add-form"
                onSubmit={this.addHabit}
            >
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
