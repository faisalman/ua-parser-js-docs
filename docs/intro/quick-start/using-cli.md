# [Quickstarts](/intro/quick-start/quick-start) : Using Command Line

## 1. Processing Single User-Agent String

You can use [npx🡥](https://docs.npmjs.com/cli/v10/commands/npx) to run UAParser.js directly from the command line without installing it globally:

```sh [npm]
$ npx ua-parser-js "<INSERT-USER-AGENT-HERE>"
```

```sh [Console ~vscode-icons:file-type-shell~]
# example command input:
npx ua-parser-js "Flock/2.16 (Zenwalk 7.3; es_PR;)"

# console output:
[
    {
        "ua": "Flock/2.16 (Zenwalk 7.3; es_PR;)",
        "browser": {
            "name": "Flock",
            "version": "2.16",
            "major": "2"
        },
        "cpu": {},
        "device": {},
        "engine": {},
        "os": {
            "name": "Zenwalk",
            "version": "7.3"
        }
    }
]

# let's save the result into a log file:
npx ua-parser-js "Flock/2.16 (Zenwalk 7.3; es_PR;)" >> log.txt
```

## 2. Processing Batch User-Agent Data from File

You can also parse multiple User-Agent strings from a file and exporting the results as JSON. This is useful for bulk analysis, log processing, or offline User-Agent parsing.

```sh [Console ~vscode-icons:file-type-shell~]
npx ua-parser-js --input-file log.txt --output-file log-result.json
```

| Option          | Description                                                       |
| --------------- | ----------------------------------------------------------------- |
| `--input-file`  | Path to a text file containing User-Agent strings (one per line). |
| `--output-file` | Path to the JSON file where parsed results will be saved.         |