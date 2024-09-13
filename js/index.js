document.querySelector('.processButton').addEventListener('click', () => {
    const logFileInput = document.querySelector('.logFileInput');
    const logTypeInput = document.querySelector('.logTypeInput');
    const outputElement = document.querySelector('.output');

    if (logFileInput.files.length === 0) {
        alert('Please select a log file');
        return;
    }

    const logFile = logFileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const fileContent = event.target.result;
        const lines = fileContent.split('\n');

        const logParser = new LogParser();
        const logType = logTypeInput.value.trim();
        const logTypeFilter = new LogTypeFilter(logType);
        const parsedLogs = [];

        lines.forEach(line => {
            if (logTypeFilter.matches(line)) {
                const parsedLog = logParser.parseLog(line);
                if (parsedLog) {
                    parsedLogs.push(parsedLog);
                }
            }
        });

        outputElement.textContent = JSON.stringify(parsedLogs, null, 2);
    };

    reader.readAsText(logFile);
});