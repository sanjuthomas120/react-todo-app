import React, { Component } from "react";
import { FILTER_ALL } from "../../services/filter";
import { MODE_CREATE, MODE_NONE } from "../../services/mode";
import { objectWithOnly, wrapChildrenWith } from "../../util/common";
import { getAll, addToList, updateStatus } from "../../services/todo";


class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            query: "",
            mode: MODE_CREATE,
            filter: FILTER_ALL,
            list: getAll(),
            sortBy: "",
        };
    }

    sortTasks(sortBy) {
        let sortedList = [...this.state.list];
        if (sortBy === "dateAsc") {
            sortedList.sort(
                (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
            );
        } else if (sortBy === "dateDesc") {
            sortedList.sort(
                (a, b) => new Date(b.dueDate) - new Date(a.dueDate)
            );
        } else if (sortBy === "priority") {
            const priorityOrder = { high: 1, medium: 2, low: 3 };
            sortedList.sort(
                (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
            );
        }

        this.setState({ list: sortedList, sortBy: sortBy });
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, [
                "addNew",
                "changeFilter",
                "changeStatus",
                "changeMode",
                "setSearchQuery",
                "sortTasks",
            ]),
        });

        return (
            <div>
                {children}
            </div>
        );
    }

    addNew(text, priority, dueDate) {
        let updatedList = addToList(this.state.list, {
            text,
            completed: false,
            priority,
            dueDate,
        });

        this.setState({ list: updatedList });
    }

    changeFilter(filter) {
        this.setState({ filter });
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.list, itemId, completed);

        this.setState({ list: updatedList });
    }

    changeMode(mode = MODE_NONE) {
        this.setState({ mode });
    }

    setSearchQuery(text) {
        this.setState({ query: text || "" });
    }
}

export default StateProvider;
