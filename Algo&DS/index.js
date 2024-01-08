//////////////////////////////////////////exercise 1


// let arr = [5,8,2,7,1];
// let temp;
// for (i = 0; i < arr.length; i++) {
//   for (j = 0; j <i; j++) {
//     if(arr[i]<arr[j]){
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     }
//   }
// }
// console.log(arr);



/////////////////////////////////////////// exercise 2


// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let N = array1.length;
// let k = 8;



// const binarysearch = (arr,N,K)=>{
// let start = 0
// let end = N-1
// while(start <= end){

//     let mid = Math.floor((start+end)/2)
//     if(arr[mid]===K){
//         return mid
//     }
//     else if (arr[mid]<K){
//         start = mid +1
//     }
//     else {
//         end=mid-1
//     }
//     // console.log(start)
//     // console.log(end)
//     // console.log(mid)
// }
// return -1
// }

// console.log(binarysearch(array1,N,k))




/////////////////////////////////////////////////////////////////////// exercise 3 





// class Node {
//   constructor(data, next = null, prev = null) {
//     this.data = data;
//     this.next = next;
//     this.prev = prev;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     let node = new Node(val);
//     if (!this.head) {
//       // check if the list is empty to set the first node as head and tail
//       this.head = node;
//       this.tail = node;
//     } else {
//       let temp = this.tail;
//       this.tail = node;
//       node.prev = temp;
//       temp.next = node;
//     }
//     this.length++; // this is the nodes counter 
//     return this;
//   }

//   print() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }








// }

// const ll = new LinkedList();

// ll.push(500);
// ll.push(300);
// ll.push(300);
// ll.push(500);

// ll.print();





