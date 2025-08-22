// 17. Write a singleton Logger class that logs messages to console.
class Logger {
    private static instance: Logger;

    private constructor() {}

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string): void {
        console.log(`[LOG]: ${message}`);
    }
}

// test
const logger = Logger.getInstance();
logger.log("This is a log message.");