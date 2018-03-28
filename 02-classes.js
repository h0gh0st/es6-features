class Baselog {
    constructor(logname) {
        this.logName = logname;
    }

    log(msg) {
        console.log(this.logName + ': ' + msg);
    }
}

class Logger extends Baselog {
    constructor(logName) {
        super(logName);

        // If this.logName = 'Log1', and we dont want to change it,
        // initialize the child class with super().
        // If want to pass variable, use super(somevalue), then pass to
        // constructor of child
    }

    writeLine(msg) {
        super.log(msg + '\r\n');
    }
}

let logger = new Logger('MyLog');
logger.writeLine('Logging via ES6 classes');