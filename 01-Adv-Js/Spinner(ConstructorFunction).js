//Using closures
//    + privacy
//    - larger memory footprint
function Spinner(){
    var counter = 0;
    this.up = function up(){
        return ++counter;
    };
    this.down = function down(){
        return --counter;
    };
}

//Using the prototype object
//  + memory efficient
//  - lack of privacy (use a convention to enforce privacy)

function Spinner(){
    this.__counter__ = 0;
}

Spinner.prototype.up = function(){
    return ++this.__counter__;
}

Spinner.prototype.down = function(){
    return --this.__counter__;
}
