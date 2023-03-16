//transComfile : ts파일을 컴파일하면 자바스크립트 파일로 변형
//터미널로 tsc --init 명령어를 이용하여 tsconfig.json 파일 생성
//생성된 파일에서 소스코드의 경로와 컴파일된 자바스크립트 코드의 경로를 설정가능
//  outDir : 컴파일된 코드(자바스크립트), rootDir : 컴파일전 tsc 소스코드

import TodoItem from "./TodoItem";

const data = [  //타입추론(type inference)로 선언과 초기화를 동시에 진행하여 data배열은 객체형식으로 자동으로 형성
    { id : 1, task : '프로세싱', complete : true},
    { id : 2, task : 'TS 학습', complete : false},
]

console.log("My Todo List");
for(let i=0; i<data.length; i++){
    let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
    todoItem.printDetails();
}


