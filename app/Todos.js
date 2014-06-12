var q = require('q');

function Todos() {
    this._todos = [];
    this._lastId = -1;
}

Todos.prototype = {};
Todos.prototype.constructor = Todos;

Todos.prototype.add = function (todoLabel) {
    this._lastId += 1;

    var newTodo = {
        label: todoLabel,
        id: this._lastId
    };

    this._todos.push(newTodo);
};

Todos.prototype.size = function() {
    return this._todos.length;
};

Todos.prototype.getAll = function() {
    var defered = q.defer();

    setTimeout(function() {
        defered.resolve(this._todos);
    }.bind(this), 1000);

    return defered.promise;
};

// Todos.prototype.get = function(id) {
//    var defered = q.defer();
//
//    setTimeout(function() {
//        var todo = this._todos.filter(function(item) {
//            return item.id == ~~id;
//        });
//        defered.resolve(todo[0] || null);
//    }.bind(this), 1000);
//
//
//    return defered.promise;
// };

module.exports = Todos;
