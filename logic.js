// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo){
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo){
    var copyOfAllTodos = this.cloneArrayOfObjects(todos);
    var id = this.generateId();
    newTodo.id = id;
    newTodo.done = false;
    copyOfAllTodos.push(newTodo);
    return copyOfAllTodos;
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects).
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
  },

  deleteTodo: function(todos, idToDelete) {
    var newArray = this.cloneArrayOfObjects(todos);
    return newArray.filter(function(obj) {
      return obj.id != idToDelete;
    });



    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
  },

  markTodo: function(todos, idToMark) {
    var newArray = this.cloneArrayOfObjects(todos);
    return newArray.map(function(elem){
      if(elem.id == idToMark){
        elem.done = !elem.done;
        return elem;
      }else {
        return elem;
      }
    });

    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
  },

  // SortButton
   sortOrder : function(a,b) {
    if (a.description < b.description) {
      return -1;
    }else
if (a.description > b.description) {
  return 1;
}else{
return 0;}
  },



  sortTodos: function(todos, sortFunction) {

    var newArray =  todos.slice().sort(sortFunction);
    return newArray;


    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
