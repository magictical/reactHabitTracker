import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
    state = {
        habits: [
            { id: 1, name: "Reading", count: 0 },
            { id: 2, name: "Running", count: 0 },
            { id: 3, name: "Coding", count: 0 },
        ],
    };

    handleIncrement = (habit) => {
        const habits = this.state.habits.map((item) => {
            if (item.id === habit.id) {
                return { ...habit, count: habit.count + 1 };
            }
            return item;
        });
        // const habits = [...this.state.habits];
        // const index = habits.indexOf(habit);
        // habits[index].count++;
        this.setState({ habits });
    };
    handleDecrement = (habit) => {
        const habits = this.state.habits.map((item) => {
            if (item.id === habit.id) {
                return {
                    ...habit,
                    count: habit.count > 0 ? habit.count - 1 : 0,
                };
            }
            return item;
        });

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

    handleAdd = (name) => {
        const habits = [
            ...this.state.habits,
            { id: Date.now(), name, count: 0 },
        ];
        this.setState({ habits });
    };

    handleReset = () => {
        const habits = this.state.habits.map((habit) => {
            if (habit.count === 0) {
                return habit;
            }
            return { ...habit, count: 0 };
        });
        this.setState({ habits });
    };
    render() {
        console.log("app");
        return (
            <>
                <Navbar
                    totalCount={
                        this.state.habits.filter((item) => item.count > 0)
                            .length
                    }
                />
                <Habits
                    habits={this.state.habits}
                    OnIncrement={this.handleIncrement}
                    OnDecrement={this.handleDecrement}
                    OnDelete={this.handleDelete}
                    OnAdd={this.handleAdd}
                    OnReset={this.handleReset}
                />
            </>
        );
    }
}

export default App;
