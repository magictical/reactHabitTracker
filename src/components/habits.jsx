import React, { Component } from "react";
import Habit from "./habit";
class Habits extends Component {
    render() {
        return (
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
        );
    }
}

export default Habits;
