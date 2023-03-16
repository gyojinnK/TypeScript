"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    //js와 같이 생성자로 초기화
    //변수에 타입을 지정해야함
    //타입스크립트에서는 접근제한자를 생성자의 매개변수에 같이 작성하여 따로 접근제한자를 설정해주지 않고 생성자에서 한번에 해결가능
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.default = TodoItem;
