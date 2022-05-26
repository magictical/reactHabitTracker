import React, { Component } from "react";
import "./app.css";
import AddHabit from "./components/addHabit";

import Habits from "./components/habits";
import Navbar from "./components/navbar";
import Reset from "./components/reset";

class App extends Component {
    state = {
        habits: [
            { id: 1, name: "Reading", count: 0 },
            { id: 2, name: "Running", count: 0 },
            { id: 3, name: "Coding", count: 0 },
        ],
    };

    handleIncrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({ habits });
    };
    handleDecrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;

        // 아래와 위는 동일 결과
        // habits[index].count < 0
        //     ? (habits[index].count = 0)
        //     : habits[index].count--;

        this.setState({ habits });
    };
    handleDelete = (habit) => {
        const habits = this.state.habits.filter((item) => item.id !== habit.id);
        this.setState({ habits });
    };

    // add habit
    addHabit = (name) => {
        const index = this.state.habits.length;
        const habit = { id: index, name: name, count: 0 };
        const habits = [...this.state.habits].push(habit);
        this.setState({ habits });
    };
    render() {
        return (
            <>
                <Navbar
                    totalCount={
                        this.state.habits.filter((item) => item.count > 0)
                            .length
                    }
                />
                <AddHabit OnAddHabit={this.addHabit} />
                <Habits
                    habits={this.state.habits}
                    OnIncrement={this.handleIncrement}
                    OnDecrement={this.handleDecrement}
                    OnDelete={this.handleDelete}
                />
                <Reset />
            </>
        );
    }
}

export default App;
