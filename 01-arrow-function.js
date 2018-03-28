const myLogger = msg => console.log(msg);
myLogger('This is a message');

//Working with "this" the "old" way
function OldCar() {
    var self = this;
    this._seats = 4; 

    this.timeout = function() {
        setTimeout(function() {
            console.log(self._seats++);
        }, 1000);
    }
}

class Car {    
    constructor() {
        this.seats = 6;
    }

    timeout() {
        setTimeout(() => {
            console.log(this.seats++);
        } ,1000);
    }
}

let c = new Car();
c.timeout();