"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
class TodoCollection {
    constructor(Username, todoItems = []) {
        this.Username = Username;
        this.todoItems = todoItems;
        this.nextid = 1;
    }
    //item을 추가하는 메소드
    addTodo(task) {
        while (this.getTodoById(this.nextid)) {
            this.nextid++;
        }
        this.todoItems.push(new TodoItem_1.default(this.nextid, task));
        return this.nextid;
    }
    //item을 찾는 메소드
    getTodoById(id) {
        return this.todoItems.find((item) => item.id === id);
    }
    //item이 task를 완료했는지 상태를 변환해주는 메소드
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.default = TodoCollection;
