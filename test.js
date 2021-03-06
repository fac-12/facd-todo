var test = require('tape');
var logicFile = require('./logic.js');

var state = [
  { id: -3, description: 'first todo', done: false },
  { id: -2, description: 'second todo', done: false},
  { id: -1, description: 'third todo', done: false },
]

var sortOrder = function(a,b) {
  if (a.description < b.description) {
    return -1;
  }
  if (a.description > b.description) {
    return 1;
}
    return 0;
}

test('Tape is up and running', function(t) {
  t.equal(1, 1, 'one should equal one');
  t.end();
});

test('check that to do has been added', function(t){
    var actual = logicFile.addTodo(state, {description: 'fourth todo', done: false});
    var expected = [
      { id: -3, description: 'first todo', done: false },
      { id: -2, description: 'second todo', done: false},
      { id: -1, description: 'third todo', done: false },
      {id: 1, description: 'fourth todo', done: false},
    ]
    t.deepEqual(actual, expected, 'should return the todos array with new todo added ');
    t.end();
});


test('check that id is removed from returned array', function(t) {
  var actual = logicFile.deleteTodo(state, -3);
  var expected =  [{ id: -2, description: 'second todo',done:false }, { id: -1, description: 'third todo',done:false }];
  t.deepEqual(actual,expected, 'should return ids');
  t.end();
});

test('deleteTodo() check that passed array is not equal to the returned one', function(t) {
    var actual = logicFile.deleteTodo(state,-3);
    var expected = state;
    t.notEqual(actual,expected,"The arrays should npt be the same");
    t.end();

});

test('Test if the done property is changed', function(t) {
  var actual = logicFile.markTodo(state, -3);
  var expected = [{ id: -3, description: 'first todo', done: true },
  { id: -2, description: 'second todo', done: false},
  { id: -1, description: 'third todo', done: false }];
  t.deepEqual(actual, expected, 'should toggle the property done for the element with id passed as argument');
  t.end();
});

test('markTodo() check that passed array is not equal to the returned one', function(t) {
    var actual = logicFile.markTodo(state,-2);
    var expected = state;
    t.notEqual(actual,expected,"The arrays should npt be the same");
    t.end();

});



test('check if items are sorted alphabetically by description', function(t) {
  var actual = logicFile.sortTodos(state, sortOrder);
  var expected = [
    { id: -3, description: 'first todo', done: false },
    { id: -2, description: 'second todo', done: false},
    { id: -1, description: 'third todo', done: false }
  ];
  t.deepEqual(actual, expected, 'should have description in alphabetical order');
  t.end();
});

test('check if items are sorted alphabetically by description', function(t) {
  var actual = logicFile.sortTodos([
    { id: -2, description: 'second todo', done: false},
    { id: -1, description: 'third todo', done: false },
    { id: -3, description: 'first todo', done: false }

  ], sortOrder);
  var expected = [
    { id: -3, description: 'first todo', done: false },
    { id: -2, description: 'second todo', done: false},
    { id: -1, description: 'third todo', done: false }
  ];
  t.deepEqual(actual, expected, 'should have description in alphabetical order');
  t.end();
});
