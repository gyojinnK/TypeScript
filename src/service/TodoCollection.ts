import { ItemCounts } from "../model/ItemCounts";
import TodoItem from "../model/TodoItem";

class TodoCollection{
    private nextid : number = 1;

    private itemMap : Map<number, TodoItem>;

    constructor(
        public Username : string,
        todoItems : TodoItem[] = [],
    ){
        this.itemMap = new Map<number, TodoItem>();
        todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }

    //item을 추가하는 메소드
    addTodo(task : string) : number {
        while(this.getTodoById(this.nextid)){
            this.nextid++;
        }
        this.itemMap.set(this.nextid, new TodoItem(this.nextid, task));
        return this.nextid;
    }

    // includeComplete -> true : 모든 할일 목록 반환
    // includeComplete -> false : 완료 목록은 제외한 할일 목록 반환
    getTodoItems(includeComplete : boolean):TodoItem[]{
        return [...this.itemMap.values()].filter(
            (item) => includeComplete || !item.complete
        )     // ...은 전개연산자로 배열로 만들어줌
    }

    removeComplete():void{
        this.itemMap.forEach((item) => {
            if(item.complete){
                this.itemMap.delete(item.id);
            }
        })
    }

    //item을 찾는 메소드
    getTodoById(id : number) : TodoItem | undefined{    //find함수로 찾는 값이 없을 수도 있으므로 undefiend를 같이 명시해야함
        return this.itemMap.get(id);
    }

    getItemCounts(): ItemCounts {
        return {
            total : this.itemMap.size,
            incomplete : this.getTodoItems(false).length
        };
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