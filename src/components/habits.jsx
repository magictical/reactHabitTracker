import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";
class Habits extends Component {
    handleAdd = (name) => {
        this.props.OnAdd(name);
    };
    render() {
        return (
            <>
                <HabitAddForm OnAdd={this.handleAdd} />
                <ul>
                    {this.props.habits.map((habit) => (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={this.props.OnIncrement}
                            onDecrement={this.props.OnDecrement}
                            onDelete={this.props.OnDelete}
                        />
                    ))}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>
                    Reset All
                </button>
            </>
        );
    }
}

export default Habits;
