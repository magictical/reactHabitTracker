import React, { memo } from "react";

const HabitAddForm = memo((props) => {
    // 리액트 요소에 접근하기 위해서 React.createRef생성 공식 API 읽어 볼것
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const addHabit = (event) => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        // this.inputRef.current.value = "";
        // 동일결과 정석인데 설정할게 더 많은 느낌 1줄vs3줄..
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="add-form" onSubmit={addHabit}>
            <input
                ref={inputRef}
                type="text"
                className="add-input"
                placeholder="Habit"
            />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;
