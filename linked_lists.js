// minimalistic example of linked lists
// const n1 ={
//     data: 100
// };

// const n2 = {
//     data:100500
// }

// n1.next = n2;

// console.log(n1);

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //insert first node 
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    //insert last node 
    insertLast(data){
        let node = new Node(data);
        let current;
        //If empty, make head
    if(!this.head){
        this.head = node;
    }else{
        current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node; 
    }
    this.size++;
    }

    
    //insert at index
    insertAt(data, index){
        //if index is out of range
        if(index>0 && index > this.size){
            console.log("the index is out of range");
            return;
        }else if( index === 0){
            // if inserting to the head
            this.head = new Node(data, this.head);
            this.size++;
            return;
        }
        const node = new Node(data);
        let current, previous, count = 0;
        current = this.head;
        while(count < index){
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;
        this.size++;
        
    } 
    //get at index
    getAt(index){
        let current = this.head;
        let count = 0;
        while(current){
            if(count == index){
                console.log(current.data);
            }
           count++;
           current = current.next;
        }
        return null;
    }   
    //remove at index
    removeAt(index){
        if(index > 0 && index >this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        if(index === 0){
            this.head = current.next;
        }else{
            while(count < index){
                count++;
                previous = current;
                current = current.next;

            }
            previous.next = current.next;
        }
        this.size --;
    }
    //clear

    //print
    printListData(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(300);
ll.insertFirst(340);
ll.insertLast(400); 
ll.removeAt(2);
ll.printListData();
