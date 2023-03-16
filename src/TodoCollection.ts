import TodoItem from "./TodoItem";

class TodoCollection{
    private nextid : number = 1;
    
    constructor(
        public Username : string,
        public todoItems : TodoItem[] = [],
    ){}

    //item을 추가하는 메소드
    addTodo(task : string) : number {
        while(this.getTodoById(this.nextid)){
            this.nextid++;
        }
        this.todoItems.push(new TodoItem(this.nextid, task));
        return this.nextid;
    }

    //item을 찾는 메소드
    getTodoById(id : number) : TodoItem | undefined{    //find함수로 찾는 값이 없을 수도 있으므로 undefiend를 같이 명시해야함
        return this.todoItems.find((item) => item.id === id)
    }

    //item이 task를 완료했는지 상태를 변환해주는 메소드
    markComplete(id : number, complete : boolean) : void{
        const todoItem = this.getTodoById(id);
        if(todoItem){
            todoItem.complete = complete;
        }
    }
}

export default TodoCollection;