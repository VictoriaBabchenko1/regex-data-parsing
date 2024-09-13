class LogTypeFilter {
    constructor(logType) {
        if (logType) {
            this.logTypeRegex = new RegExp(`\\b${logType}\\b`, 'i');
        } else {
            this.logTypeRegex = null;
        }
    }

    matches(logLine) {
        return this.logTypeRegex ? this.logTypeRegex.test(logLine) : true;
    }
}