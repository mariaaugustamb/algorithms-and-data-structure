class Stack{
    constructor(){
        this.count = 0; //tracks the size os the stack
        this.items = {}; //dictionaire with the elements
    }

    pushStack(element){ //add element
        this.items[this.count] = element;
        this.count++;
    }

    popStack(){ //delete element
        if(this.count === 0){
            return undefined;
        }
        let temp = this.items[this.count-1];
        this.items.length = this.count-1;
        this.count--;
        return temp;
    }

    peekStack(){ //returns the element on the top of the stack
        if(this.isEmptyStack()){
            return undefined;
        }
        return this.items[this.count-1];
    }

    isEmptyStack(){ //returns true if stack is empty
        return this.count > 0 ? false : true;
    }

    clearStack(){ //reset the stack
        this.items = {};
        this.count = 0;
    }

    sizeStack(){ //returns the size of the stack
        return this.count;
    }

    printStack(){ //prints the stack
        for(let i = 0; i < this.count; i++){
            console.log(this.items[i]);
        }        
    }

    toStringStack(){
        let objString = '';
        if(!this.isEmptyStack()){
            for (let i = 0; i < this.count; i++){
                if(i === this.count-1){
                    objString += this.items[i];
                    return objString;
                }else{
                    objString += this.items[i] + ', ';
                }
            }
        }

        return objString;
    }    

}

const stack = new Stack();
stack.pushStack(1);
stack.pushStack(2);
stack.pushStack(3);
stack.pushStack(4);
stack.pushStack(5);
stack.pushStack(6);

stack.printStack();

console.log(stack.isEmptyStack());

console.log(stack.toStringStack());

stack.popStack();
stack.printStack();
console.log(stack.peekStack());

stack.clearStack();
stack.printStack();