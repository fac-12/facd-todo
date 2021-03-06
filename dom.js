// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'Sleep all day', done: false },
    { id: -2, description: 'Party all night', done: false},
    { id: -1, description: 'Never grow old', done: false },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    todoNode.setAttribute("class", "todo__List");
    // you will need to use addEventListener

    // add span holding description
    var todoText = document.createElement('span');
    var text = document.createTextNode(todo.description);
    todoNode.appendChild(todoText);
    todoText.appendChild(text);
    todoText.setAttribute("class", "todo__List__span")

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
  //  deleteButtonNode.appendChild(deleteButtonText);
    todoNode.appendChild(deleteButtonNode);
    deleteButtonNode.setAttribute("class", "todo__List__button--del")
    deleteButtonNode.setAttribute('aria-label','Delete button');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });


    // add markTodo button
    var markTodoButton = document.createElement('button');
    markTodoButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    todoNode.appendChild(markTodoButton)
    markTodoButton.setAttribute("class", "todo__List__button--mark")
    markTodoButton.setAttribute('aria-label','Complete button');
    // add classes for css
    markTodoButton.addEventListener('click', function(event){
      var newState = todoFunctions.markTodo(state, todo.id);
      if(!todoText.classList.contains("completed")){
        todoText.classList.add("completed");
        todo.done = true;
      } else {
        todoText.classList.remove("completed");
        todo.done = false;
      }
    })
    return todoNode;
  };



  var sortButton = document.getElementById("sortId");
  sortButton.addEventListener('click', function(event) {

   var newState = todoFunctions.sortTodos(state,todoFunctions.sortOrder);
    update(newState);


  });


  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      var newdescription = event.target[0].value;


      // event.target ....
      var newObj = {
        description: newdescription
      }


      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, newObj); // ?? change this!
      update(newState);
      document.getElementsByClassName("todoform__input")[0].value = '';

    });

  }


  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);

})();
