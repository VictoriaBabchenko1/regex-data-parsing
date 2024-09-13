class LogParser {
    constructor() {
        this.logRegex = /(?<date>\d{2}\/\d{2})\s+(?<time>\d{2}:\d{2}:\d{2})\s+(?<logType>\w+)\s*:?\s*(?<tag>[.\w]+):\s+(?<message>.+)/;
    }

    parseLog(logLine) {
        const match = logLine.match(this.logRegex);
        if (match && match.groups) {
            return {
                date: match.groups.date,
                time: match.groups.time,
                logType: match.groups.logType,
                tag: match.groups.tag,
                message: match.groups.message
            };
        } else {
            return null;
        }
    }
}