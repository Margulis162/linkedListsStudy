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
    
    //remove at index

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
ll.printListData();