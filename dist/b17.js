"use strict";
// 17. Write a singleton Logger class that logs messages to console.
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
}
// test
const logger = Logger.getInstance();
logger.log("This is a log message.");
