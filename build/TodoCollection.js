"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
class TodoCollection {
    constructor(Username, todoItems = []) {
        this.Username = Username;
        this.nextid = 1;
        this.itemMap = new Map();
        todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }
    //item을 추가하는 메소드
    addTodo(task) {
        while (this.getTodoById(this.nextid)) {
            this.nextid++;
        }
        this.itemMap.set(this.nextid, new TodoItem_1.default(this.nextid, task));
        return this.nextid;
    }
    // includeComplete -> true : 모든 할일 목록 반환
    // includeComplete -> false : 완료 목록은 제외한 할일 목록 반환
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()].filter((item) => includeComplete || !item.complete); // ...은 전개연산자로 배열로 만들어줌
    }
    removeComplete() {
        this.itemMap.forEach((item) => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    //item을 찾는 메소드
    getTodoById(id) {
        return this.itemMap.get(id);
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
