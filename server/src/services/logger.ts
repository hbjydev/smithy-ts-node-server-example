import { singleton } from "tsyringe";

@singleton()
export class Logger {
    private readonly levels = ['debug', 'info', 'warn', 'error'] as const;
    private defaultConsole: typeof console;

    constructor() {
        this.defaultConsole = { ...console }
        console.info = (...args) => this.log(args.join(", "), 'info');
        console.warn = (...args) => this.log(args.join(", "), 'warn');
        console.error = (...args) => this.log(args.join(", "), 'error');
    }

    console(message: string, level: typeof this.levels[number] = 'info') {
        const templatedMessage = `[${level}] ${message}`;
        this.defaultConsole[level](templatedMessage);
    }

    log(
        message: string,
        level: typeof this.levels[number] = 'info',
    ) {
        if (message == '') return;
        this.console(message, level);
    }
}
