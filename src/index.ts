//transComfile : ts파일을 컴파일하면 자바스크립트 파일로 변형
//터미널로 tsc --init 명령어를 이용하여 tsconfig.json 파일 생성
//생성된 파일에서 소스코드의 경로와 컴파일된 자바스크립트 코드의 경로를 설정가능
//  outDir : 컴파일된 코드(자바스크립트), rootDir : 컴파일전 tsc 소스코드

import TodoItem from "./TodoItem";
import {data} from "./data";
import TodoCollection from "./TodoCollection";

const sampleTodos : TodoItem[] = data.map(
    (item) => new TodoItem(item.id, item.task, item.complete)
);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

myTodoCollection.addTodo("Learn to Java");
myTodoCollection.addTodo("Learn to TS");

myTodoCollection.markComplete(4, true);


console.log(`${myTodoCollection.Username}`);

myTodoCollection.removeComplete();

myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
console.log("=====================================");
myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails());
console.log("=====================================");


