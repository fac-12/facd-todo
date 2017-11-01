var test = require('tape');
var logicFile = require('./logic.js');

var state = [
  { id: -3, description: 'first todo', done: false },
  { id: -2, description: 'second todo', done: true},
  { id: -1, description: 'third todo', done: true },
]

test('check that to do has been added', function(t){
    var actual = logicFile.addTodo(state, {description: 'fourth todo', done: false});
    var expected = [
      { id: -3, description: 'first todo', done: false },
      { id: -2, description: 'second todo', done: true},
      { id: -1, description: 'third todo', done: true },
      {id: 1, description: 'fourth todo', done: false},
    ]
    t.deepEqual(actual, expected, 'should return the todos array with new todo added ');
    t.end();
})
