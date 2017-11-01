var test = require('tape');
var logicFile = require('./logic');

var state = [
  { id: -3, description: 'first todo' },
  { id: -2, description: 'second todo' },
  { id: -1, description: 'third todo' },
];


test('Tape is up and running', function(t) {
  t.equal(1, 1, 'one should equal one');
  t.end();
});

test('check that id is removed from returned array', function(t) {
  t.deepEqual(logicFile.deleteTodo(state, -3), [{ id: -2, description: 'second todo' }, { id: -1, description: 'third todo' }], 'should return ids');
  t.end();
})
