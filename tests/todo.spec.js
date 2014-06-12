var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var Todos = require('../app/Todos');

describe('TODO', function () {

    // Initialize the test suite
    before(function () {
    });

    // Setup before running EACH test
    beforeEach(function() {
    });

    afterEach(function() {
    });

    after(function () {
    });

    it('Should add a todo', function () {
        var todoList = new Todos();

        todoList.add('a new todo');

        expect(todoList.size()).to.eq(1);
    });

    it('Should retrieve all todos as a promise', function (done) {

        var todoList = new Todos();
        todoList.add('a new todo');

        todoList.getAll().then(function (todos) {
            expect(todos.length).to.eq(1);
            expect(todos[0]).to.have.property('label');
            expect(todos[0].label).to.equal('a new todo');
            expect(todos[0]).to.have.property('id');
            expect(todos[0].id).to.eq(0);
            done();
        });
    });

    // ..... continue

  //  it('Should retrieve a todos by it\'s id', function(done) {
  //      var todoList = new Todos();
  //      todoList.add('a new todo');
   //
  //      todoList.get(0).then(function(todo) {
  //          expect(todo).to.have.property('label');
  //          expect(todo.label).to.equal('a new todo');
  //          done();
  //      });
  //  });

});
