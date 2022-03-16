class Stack{ 
    constructor(){
        this.items = [];
    }

    pushStack(element){
        this.items[this.items.length] = element;
    }

    popStack(){
        let temp;
        temp = this.items[this.items.length-1];
        this.items.length = this.items.length-1;
        return temp;
    }

    peekStack(){
        return this.items[this.items.length-1];
    }

    isEmptyStack(){
        return this.items.length > 0 ? false : true;
    }

    clearStack(){
        this.items = [];
    }

    sizeStack(){
        return this.items.length;
    }

    printStack(){
        this.items.forEach(x => console.log(x));
    }

}

const stack = new Stack();

console.log(stack.isEmptyStack());

stack.pushStack(1);
stack.pushStack(2);
stack.pushStack(3);
stack.pushStack(4);
stack.pushStack(5);
stack.pushStack(6);

stack.printStack();

stack.popStack();

stack.printStack();

stack.pushStack(6);

stack.printStack();

console.log(stack.isEmptyStack());

console.log(stack.peekStack());

stack.clearStack();

stack.printStack();