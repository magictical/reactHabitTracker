import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";
class Habits extends Component {
    handleAdd = (name) => {
        this.props.OnAdd(name);
    };
    handleReset = () => {
        this.props.OnReset();
    };
    render() {
        console.log("habits");
        return (
            <div>
                <HabitAddForm onAdd={this.handleAdd} />
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
                <button className="habits-reset" onClick={this.handleReset}>
                    Reset All
                </button>
            </div>
        );
    }
}

export default Habits;
