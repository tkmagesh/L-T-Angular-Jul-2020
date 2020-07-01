function Spinner(){
    var counter = 0;
    this.up = function up(){
        return ++counter;
    };
    this.down = function down(){
        return --counter;
    };

}